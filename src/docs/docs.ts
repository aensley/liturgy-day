import * as Sentry from '@sentry/browser'
import 'rapidoc'
import { version } from '../../package.json'

declare const ENVIRONMENT: string
declare const COMMIT_SHA: string

Sentry.init({
  dsn: 'https://e0826f0dac1840ab9cb9c57f5142f99e@o4509381914091520.ingest.us.sentry.io/4509381916319744',
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
  release: ENVIRONMENT === 'production' ? version : COMMIT_SHA
})
