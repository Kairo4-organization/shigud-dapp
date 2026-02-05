import rateLimit from 'express-rate-limit'
import type { Request, Response, NextFunction } from 'express'
import { env } from '../config.js'
import {
  trackUsage,
  isRateLimited,
  getRemainingRequests,
  getTierLimits,
} from '../services/api-keys.js'
import type { ApiKeyTier } from '../types/api-key.js'

// Legacy global rate limiter (fallback)
export const globalRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req: Request, res: Response) => {
    res.status(429).json({
      success: false,
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'Too many requests, please try again later',
        details: {
          retryAfter: Math.ceil(env.RATE_LIMIT_WINDOW_MS / 1000),
          limit: env.RATE_LIMIT_MAX,
        },
      },
    })
  },
  skip: (req: Request) => req.path === '/v1/health' || req.path === '/' || req.path === '/skill.md',
})

// Tiered rate limiter (per API key)
export function tieredRateLimiter(req: Request, res: Response, next: NextFunction) {
  // Skip for public paths
  if (req.path === '/v1/health' || req.path === '/' || req.path === '/skill.md') {
    return next()
  }

  const tier: ApiKeyTier = req.apiKeyTier || 'free'
  const keyId = req.apiKey?.id

  // If no key ID (legacy key or no auth), use global limiter
  if (!keyId) {
    return globalRateLimiter(req, res, next)
  }

  // Check if rate limited
  if (isRateLimited(keyId, tier)) {
    const limits = getTierLimits(tier)
    res.status(429).json({
      success: false,
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: `Rate limit exceeded for ${tier} tier`,
        details: {
          tier,
          limit: limits.requestsPerHour,
          window: '1 hour',
          retryAfter: 3600,
          upgrade: tier === 'free' ? 'Upgrade to pro for 10,000 requests/hour' : undefined,
        },
      },
    })
    return
  }

  // Track usage
  trackUsage(keyId)

  // Add rate limit headers
  const limits = getTierLimits(tier)
  const remaining = getRemainingRequests(keyId, tier)
  res.setHeader('X-RateLimit-Limit', limits.requestsPerHour)
  res.setHeader('X-RateLimit-Remaining', remaining)
  res.setHeader('X-RateLimit-Reset', Math.ceil(Date.now() / 1000) + 3600)
  res.setHeader('X-RateLimit-Tier', tier)

  next()
}

// Export for backwards compatibility
export const rateLimiter = tieredRateLimiter
