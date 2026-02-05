import Redis from 'ioredis'
import { env } from '../config.js'
import { logger } from '../logger.js'

let redis: Redis | null = null
let isConnected = false
let connectionAttempts = 0
const MAX_RECONNECT_ATTEMPTS = 10

export function isRedisEnabled(): boolean {
  return !!env.REDIS_URL
}

export function isRedisConnected(): boolean {
  return isConnected
}

export function getRedisClient(): Redis | null {
  return redis
}

export async function initRedis(): Promise<void> {
  if (!env.REDIS_URL) {
    logger.info('Redis not configured — using in-memory fallback')
    return
  }

  try {
    redis = new Redis(env.REDIS_URL, {
      maxRetriesPerRequest: 3,
      retryStrategy(times) {
        connectionAttempts = times
        if (times > MAX_RECONNECT_ATTEMPTS) {
          logger.error({ attempts: times }, 'Redis max reconnection attempts reached')
          return null // Stop retrying
        }
        const delay = Math.min(times * 200, 5000)
        logger.warn({ attempt: times, delay }, 'Redis reconnecting...')
        return delay
      },
      lazyConnect: true,
    })

    redis.on('connect', () => {
      isConnected = true
      connectionAttempts = 0
      logger.info('Redis connected')
    })

    redis.on('error', (err) => {
      logger.error({ err: err.message }, 'Redis error')
    })

    redis.on('close', () => {
      isConnected = false
      logger.warn('Redis connection closed')
    })

    redis.on('reconnecting', () => {
      logger.info('Redis reconnecting...')
    })

    await redis.connect()
  } catch (err) {
    logger.error({ err }, 'Failed to initialize Redis — using in-memory fallback')
    redis = null
    isConnected = false
  }
}

export async function closeRedis(): Promise<void> {
  if (redis) {
    await redis.quit()
    redis = null
    isConnected = false
    logger.info('Redis connection closed')
  }
}

// Helper functions for common operations with fallback handling

export async function redisGet(key: string): Promise<string | null> {
  if (!redis || !isConnected) return null
  try {
    return await redis.get(key)
  } catch (err) {
    logger.warn({ err, key }, 'Redis GET failed')
    return null
  }
}

export async function redisSet(
  key: string,
  value: string,
  ttlSeconds?: number
): Promise<boolean> {
  if (!redis || !isConnected) return false
  try {
    if (ttlSeconds) {
      await redis.setex(key, ttlSeconds, value)
    } else {
      await redis.set(key, value)
    }
    return true
  } catch (err) {
    logger.warn({ err, key }, 'Redis SET failed')
    return false
  }
}

export async function redisIncr(key: string): Promise<number | null> {
  if (!redis || !isConnected) return null
  try {
    return await redis.incr(key)
  } catch (err) {
    logger.warn({ err, key }, 'Redis INCR failed')
    return null
  }
}

export async function redisExpire(key: string, ttlSeconds: number): Promise<boolean> {
  if (!redis || !isConnected) return false
  try {
    await redis.expire(key, ttlSeconds)
    return true
  } catch (err) {
    logger.warn({ err, key }, 'Redis EXPIRE failed')
    return false
  }
}

export async function redisTtl(key: string): Promise<number> {
  if (!redis || !isConnected) return -1
  try {
    return await redis.ttl(key)
  } catch (err) {
    logger.warn({ err, key }, 'Redis TTL failed')
    return -1
  }
}

export async function redisDel(key: string): Promise<boolean> {
  if (!redis || !isConnected) return false
  try {
    await redis.del(key)
    return true
  } catch (err) {
    logger.warn({ err, key }, 'Redis DEL failed')
    return false
  }
}

export async function redisPing(): Promise<boolean> {
  if (!redis || !isConnected) return false
  try {
    const result = await redis.ping()
    return result === 'PONG'
  } catch {
    return false
  }
}
