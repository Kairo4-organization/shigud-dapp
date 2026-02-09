/**
 * Sipher Status Provider — injects API health into agent context.
 *
 * Called during composeState() to give the agent awareness of
 * whether the Sipher privacy backend is available and healthy.
 */
import type { IAgentRuntime, Memory, Provider, State } from '@elizaos/core'
import { createClient } from '../client.js'

interface HealthData {
  status: string
  version: string
  uptime: number
  solana: {
    connected: boolean
    latencyMs: number
    cluster: string
  }
  memory: {
    heapUsedMB: number
    rss: number
  }
}

export const sipherStatusProvider: Provider = {
  name: 'SIPHER_STATUS',
  description: 'Sipher API health and connection status',
  dynamic: true,

  get: async (
    runtime: IAgentRuntime,
    _message: Memory,
    _state: State,
  ) => {
    try {
      const client = createClient(runtime)
      const health = await client.request<HealthData>('/v1/health')

      const text =
        `Sipher API: ${health.status} (v${health.version}) | ` +
        `Solana: ${health.solana.connected ? 'connected' : 'disconnected'} ` +
        `(${health.solana.latencyMs}ms, ${health.solana.cluster}) | ` +
        `Uptime: ${Math.round(health.uptime / 60)}min`

      return {
        text,
        data: health,
        values: {
          sipherStatus: health.status,
          sipherVersion: health.version,
          solanaConnected: health.solana.connected,
          solanaLatency: health.solana.latencyMs,
        },
      }
    } catch {
      return {
        text: 'Sipher API: unavailable — privacy actions may fail',
        values: { sipherStatus: 'unavailable' },
      }
    }
  },
}
