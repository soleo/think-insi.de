import { registerOTel } from '@vercel/otel'
import { SamplingDecision } from '@opentelemetry/sdk-trace-base'
import { Context } from '@opentelemetry/api'

export function register() {
  registerOTel({
    serviceName: 'think-inside-app',
    traceExporter: 'auto',
    spanProcessors: ['auto'],
    traceSampler: {
      shouldSample: (context: Context) => {
        return {
          decision: SamplingDecision.RECORD_AND_SAMPLED
        }
      },
    },
  })
}