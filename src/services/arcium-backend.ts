import type { PrivacyBackend } from '@sip-protocol/sdk'
import { submitComputation, type ComputationStatus } from './arcium-provider.js'

export class ArciumMockBackend implements PrivacyBackend {
  readonly version = 2 as const
  readonly name = 'arcium-mpc'
  readonly type = 'compute' as const
  readonly chains = ['solana']

  async checkAvailability() {
    return {
      available: true,
      estimatedCost: 5000n,
      estimatedTime: 4000,
    }
  }

  getCapabilities() {
    return {
      hiddenAmount: false,
      hiddenSender: false,
      hiddenRecipient: false,
      hiddenCompute: true,
      complianceSupport: true,
      setupRequired: true,
      latencyEstimate: 'medium' as const,
      supportedTokens: 'native' as const,
    }
  }

  async execute(): Promise<never> {
    throw new Error('Arcium is a compute backend. Use executeComputation() instead.')
  }

  async executeComputation(params: {
    circuitId: string
    encryptedInputs: Uint8Array[]
    chain?: string
    cipher?: string
    cluster?: string
  }) {
    const result = submitComputation({
      circuitId: params.circuitId,
      encryptedInputs: Array.from(params.encryptedInputs).map(
        (buf) => '0x' + Buffer.from(buf).toString('hex')
      ),
      chain: params.chain,
      cipher: params.cipher,
      cluster: params.cluster,
    })

    return {
      success: true,
      computationId: result.computationId,
      backend: this.name,
      status: result.status as ComputationStatus,
      metadata: {
        circuitId: result.circuitId,
        chain: result.chain,
        inputCount: result.inputCount,
        estimatedCompletion: result.estimatedCompletion,
      },
    }
  }

  async estimateCost(): Promise<bigint> {
    return 5000n
  }
}
