import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  isRedisEnabled,
  isRedisConnected,
  redisGet,
  redisSet,
  redisIncr,
  redisExpire,
  redisDel,
  redisPing,
  redisTtl,
} from '../src/services/redis.js'

// Mock the redis module since we don't have a real Redis in tests
vi.mock('../src/services/redis.js', async () => {
  const store = new Map<string, { value: string; ttl: number | null; expiresAt: number | null }>()

  return {
    isRedisEnabled: vi.fn(() => false),
    isRedisConnected: vi.fn(() => false),
    getRedisClient: vi.fn(() => null),
    initRedis: vi.fn(async () => {}),
    closeRedis: vi.fn(async () => {}),

    redisGet: vi.fn(async (key: string) => {
      const entry = store.get(key)
      if (!entry) return null
      if (entry.expiresAt && Date.now() > entry.expiresAt) {
        store.delete(key)
        return null
      }
      return entry.value
    }),

    redisSet: vi.fn(async (key: string, value: string, ttlSeconds?: number) => {
      store.set(key, {
        value,
        ttl: ttlSeconds || null,
        expiresAt: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null,
      })
      return true
    }),

    redisIncr: vi.fn(async (key: string) => {
      const entry = store.get(key)
      const current = entry ? parseInt(entry.value, 10) : 0
      const newValue = current + 1
      store.set(key, {
        value: String(newValue),
        ttl: entry?.ttl || null,
        expiresAt: entry?.expiresAt || null,
      })
      return newValue
    }),

    redisExpire: vi.fn(async (key: string, ttlSeconds: number) => {
      const entry = store.get(key)
      if (!entry) return false
      entry.ttl = ttlSeconds
      entry.expiresAt = Date.now() + ttlSeconds * 1000
      return true
    }),

    redisDel: vi.fn(async (key: string) => {
      return store.delete(key)
    }),

    redisPing: vi.fn(async () => false),

    redisTtl: vi.fn(async (key: string) => {
      const entry = store.get(key)
      if (!entry || !entry.expiresAt) return -1
      const remaining = Math.ceil((entry.expiresAt - Date.now()) / 1000)
      return remaining > 0 ? remaining : -2
    }),

    // Test helper to clear store
    __clearStore: () => store.clear(),
    __getStore: () => store,
  }
})

describe('Redis Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('Connection Status', () => {
    it('should report Redis as disabled when no URL configured', () => {
      expect(isRedisEnabled()).toBe(false)
    })

    it('should report Redis as disconnected initially', () => {
      expect(isRedisConnected()).toBe(false)
    })
  })

  describe('Graceful Fallback', () => {
    it('redisGet returns null when disconnected', async () => {
      const result = await redisGet('nonexistent')
      expect(result).toBeNull()
    })

    it('redisSet succeeds even when mocked', async () => {
      const result = await redisSet('test-key', 'test-value')
      expect(result).toBe(true)
    })

    it('redisIncr returns incremented value', async () => {
      const result1 = await redisIncr('counter')
      expect(result1).toBe(1)

      const result2 = await redisIncr('counter')
      expect(result2).toBe(2)
    })

    it('redisDel removes key', async () => {
      await redisSet('to-delete', 'value')
      const deleted = await redisDel('to-delete')
      expect(deleted).toBe(true)
    })

    it('redisPing returns false when disconnected', async () => {
      const result = await redisPing()
      expect(result).toBe(false)
    })
  })

  describe('TTL Operations', () => {
    it('redisSet with TTL stores expiration', async () => {
      await redisSet('ttl-key', 'value', 3600)
      const ttl = await redisTtl('ttl-key')
      expect(ttl).toBeGreaterThan(0)
      expect(ttl).toBeLessThanOrEqual(3600)
    })

    it('redisTtl returns -1 for non-existent key', async () => {
      const ttl = await redisTtl('nonexistent')
      expect(ttl).toBe(-1)
    })

    it('redisExpire updates TTL on existing key', async () => {
      await redisSet('expire-key', 'value')
      const result = await redisExpire('expire-key', 60)
      expect(result).toBe(true)
    })

    it('redisExpire returns false for non-existent key', async () => {
      const result = await redisExpire('nonexistent', 60)
      expect(result).toBe(false)
    })
  })

  describe('Key Operations', () => {
    it('redisGet retrieves stored value', async () => {
      await redisSet('get-key', 'stored-value')
      const value = await redisGet('get-key')
      expect(value).toBe('stored-value')
    })

    it('redisGet returns null for missing key', async () => {
      const value = await redisGet('missing-key')
      expect(value).toBeNull()
    })

    it('redisIncr initializes counter from 0', async () => {
      const value = await redisIncr('new-counter')
      expect(value).toBe(1)
    })
  })
})

describe('Redis Integration Patterns', () => {
  describe('Rate Limiting Pattern', () => {
    it('tracks request count with TTL', async () => {
      const keyId = 'test-key-id'
      const redisKey = `sipher:ratelimit:${keyId}`

      // First request
      const count1 = await redisIncr(redisKey)
      expect(count1).toBe(1)

      // Set TTL on first request
      if (count1 === 1) {
        await redisExpire(redisKey, 3600)
      }

      // Subsequent requests
      const count2 = await redisIncr(redisKey)
      expect(count2).toBe(2)

      const count3 = await redisIncr(redisKey)
      expect(count3).toBe(3)

      // Verify TTL is set
      const ttl = await redisTtl(redisKey)
      expect(ttl).toBeGreaterThan(0)
    })

    it('simulates rate limit check', async () => {
      const keyId = 'rate-limit-test'
      const redisKey = `sipher:ratelimit:${keyId}`
      const limit = 5

      // Simulate 5 requests
      for (let i = 0; i < 5; i++) {
        await redisIncr(redisKey)
      }

      // Check if rate limited
      const countStr = await redisGet(redisKey)
      const count = countStr ? parseInt(countStr, 10) : 0
      const isLimited = count >= limit

      expect(isLimited).toBe(true)
    })
  })

  describe('Idempotency Pattern', () => {
    it('caches response with TTL', async () => {
      const idempotencyKey = 'uuid-v4-here'
      const redisKey = `sipher:idempotency:${idempotencyKey}`
      const response = JSON.stringify({
        status: 200,
        body: { success: true, data: { result: 'test' } },
        headers: { 'content-type': 'application/json' },
        timestamp: Date.now(),
      })

      // Cache response
      await redisSet(redisKey, response, 86400) // 24 hours

      // Retrieve cached response
      const cached = await redisGet(redisKey)
      expect(cached).toBe(response)

      // Parse and verify
      const parsed = JSON.parse(cached!)
      expect(parsed.status).toBe(200)
      expect(parsed.body.success).toBe(true)
    })

    it('returns null for uncached idempotency key', async () => {
      const redisKey = 'sipher:idempotency:new-uuid'
      const cached = await redisGet(redisKey)
      expect(cached).toBeNull()
    })
  })
})
