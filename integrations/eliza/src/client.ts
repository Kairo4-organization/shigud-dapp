/**
 * Sipher API client for Eliza plugins.
 *
 * Handles authenticated requests to any Sipher instance and provides
 * a factory that reads connection settings from the Eliza runtime.
 */

// Minimal runtime interface — avoids hard dep on @elizaos/core
interface RuntimeLike {
  getSetting(key: string): string | undefined
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: { code: string; message: string }
}

export class SipherClient {
  constructor(
    private baseUrl: string,
    private apiKey: string,
  ) {}

  async request<T>(path: string, body?: unknown): Promise<T> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-API-Key': this.apiKey,
    }

    const res = await fetch(`${this.baseUrl}${path}`, {
      method: body !== undefined ? 'POST' : 'GET',
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })

    const json = (await res.json()) as ApiResponse<T>

    if (!json.success) {
      const code = json.error?.code ?? 'UNKNOWN'
      const msg = json.error?.message ?? 'Request failed'
      throw new Error(`Sipher ${path}: ${msg} (${code})`)
    }

    return json.data!
  }

  get url(): string {
    return this.baseUrl
  }
}

/**
 * Create a SipherClient from Eliza runtime settings.
 *
 * Reads:
 *   SIPHER_API_KEY  — required
 *   SIPHER_URL      — optional (default: https://sipher.sip-protocol.org)
 */
export function createClient(runtime: RuntimeLike): SipherClient {
  const apiKey = runtime.getSetting('SIPHER_API_KEY')
  if (!apiKey) {
    throw new Error('SIPHER_API_KEY is required in agent settings')
  }

  const baseUrl = runtime.getSetting('SIPHER_URL') || 'https://sipher.sip-protocol.org'
  return new SipherClient(baseUrl, apiKey)
}
