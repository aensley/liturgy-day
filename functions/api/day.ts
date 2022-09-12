import { DayResponse, LiturgicalRecord, RosarySeries } from '../../src/ts/datatypes'
import { isValidDate } from '../../src/ts/date'
import { getCurrentRosarySeries } from '../../src/ts/rosary'
import { getCurrentSeason } from '../../src/ts/season'
import { captureError } from '@cfworker/sentry'

/**
 * Handle get requests.
 *
 * @param {any} context Cloudflare context
 *
 * @returns {Promise<Response>}
 */
export const onRequestGet = async function (context: any): Promise<Response> {
  try {
    const { searchParams } = new URL(context.request.url)
    const timestamp: string = searchParams.get('timestamp') ?? ''
    const date: string = searchParams.get('date') ?? ''
    const check: number = getCheckTime(timestamp, date)
    const season: LiturgicalRecord = getCurrentSeason(check)
    const rosarySeries: RosarySeries = getCurrentRosarySeries(check)
    const response: DayResponse = getDayResponse(
      await context.env.default.get('CF_PAGES_COMMIT_SHA'),
      check,
      season,
      rosarySeries
    )
    return new Response(JSON.stringify(response), { status: 200 })
  } catch (e) {
    /* eslint-disable @typescript-eslint/naming-convention */
    const { event_id, posted } = captureError(
      await context.env.default.get('SENTRY_DSN'),
      await context.env.default.get('ENVIRONMENT'),
      await context.env.default.get('CF_PAGES_COMMIT_SHA'),
      e,
      context.request,
      ''
    )
    context.request.waitUntil(posted)
    return await returnError(e, event_id)
    /* eslint-enable @typescript-eslint/naming-convention */
  }
}

/**
 * Get the response object for valid requests.
 *
 * @param {string}           version      The version of the API
 * @param {number}           check        The check timestamp
 * @param {LiturgicalRecord} season       The liturgical season record
 * @param {RosarySeries}     rosarySeries The rosary series
 *
 * @returns {DayResponse}
 */
const getDayResponse = (
  version: string,
  check: number,
  season: LiturgicalRecord,
  rosarySeries: RosarySeries
): DayResponse => {
  const response: DayResponse = {
    version: version,
    timestamp: check,
    season: season.season,
    'sunday-cycle': season['sunday-cycle'],
    'weekday-cycle': season['weekday-cycle'],
    'loth-volume': season['loth-volume'],
    'rosary-series': rosarySeries
  }

  return response
}

/**
 * Return the proper response when an error is encountered.
 *
 * @param {any} e       Error object
 * @param {any} eventId Error event ID
 *
 * @returns {Promise<Response>}
 */
const returnError = async (e: any, eventId: any): Promise<Response> => {
  let statusNumber: number
  switch (e.constructor) {
    case Error:
      statusNumber = 400
      break
    case RangeError:
      statusNumber = 400
      break
    default:
      statusNumber = 500
  }

  return new Response(JSON.stringify({ error: e.message, 'event-id': eventId }), { status: statusNumber })
}

/**
 * Resolve the given parameters (if any) and returns the timestamp to check.
 *
 * @param {string} timestamp The timestamp supplied to the request.
 * @param {string} date      The date supplied to the request.
 *
 * @returns {number}
 */
const getCheckTime = (timestamp: string, date: string): number => {
  let check: number = Math.floor(Date.now() / 1000)
  const timestampNumber: number = parseInt(timestamp)
  if (Number.isInteger(timestampNumber)) {
    check = timestampNumber
  } else if (isValidDate(date)) {
    check = Math.floor(new Date(date).getTime() / 1000)
  }

  return check
}
