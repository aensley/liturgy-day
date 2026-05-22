import { sentryPagesPlugin } from '@sentry/cloudflare'
import { version } from '../package.json'

interface Env {
  SENTRY_DSN: string
  ENVIRONMENT: string
  CF_PAGES_COMMIT_SHA: string
}

export const onRequest = sentryPagesPlugin<Env>((context) => ({
  dsn: context.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
  release: context.env.ENVIRONMENT === 'production' ? version : context.env.CF_PAGES_COMMIT_SHA
}))
