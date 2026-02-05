export type ApiKeyTier = 'free' | 'pro' | 'enterprise'

export interface ApiKeyConfig {
  id: string
  key: string
  tier: ApiKeyTier
  name: string
  createdAt: string
  expiresAt?: string
  revokedAt?: string
  metadata?: Record<string, unknown>
}

export interface ApiKeyUsage {
  keyId: string
  requestCount: number
  lastRequestAt: string
  windowStart: string
}

export interface TierLimits {
  requestsPerHour: number
  burstLimit: number
  allowedEndpoints: string[] | '*'
}

export const TIER_LIMITS: Record<ApiKeyTier, TierLimits> = {
  free: {
    requestsPerHour: 100,
    burstLimit: 10,
    allowedEndpoints: [
      '/v1/stealth/*',
      '/v1/commitment/*',
      '/v1/viewing-key/*',
      '/v1/health',
      '/v1/ready',
    ],
  },
  pro: {
    requestsPerHour: 10_000,
    burstLimit: 100,
    allowedEndpoints: '*',
  },
  enterprise: {
    requestsPerHour: 100_000,
    burstLimit: 1000,
    allowedEndpoints: '*',
  },
}

declare global {
  namespace Express {
    interface Request {
      apiKey?: ApiKeyConfig
      apiKeyTier?: ApiKeyTier
    }
  }
}
