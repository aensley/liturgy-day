import { DayResponse, LiturgicalRecord, RosarySeries } from '../../../src/ts/datatypes'
import { getCheckTime, getResponseHeaders, returnError } from '../../../src/ts/http'
import { getCurrentRosarySeries } from '../../../src/ts/rosary'
import { getCurrentSeason } from '../../../src/ts/season'

/**
 * Handle get requests.
 *
 * @param {any} context Cloudflare context
 *
 * @returns {Promise<Response>}
 */
export const onRequestGet = async function (context: any): Promise<Response> {
  try {
    const date = context.params.date ?? ''
    const check = getCheckTime(date)
    const season: LiturgicalRecord = getCurrentSeason(check)
    const rosarySeries: RosarySeries = getCurrentRosarySeries(check)
    const response: DayResponse = getDayResponse(date, season, rosarySeries)
    return new Response(JSON.stringify(response), {
      headers: getResponseHeaders(),
      status: 200
    })
  } catch (e) {
    return await returnError(e)
  }
}

/**
 * Get the response object for valid requests.
 *
 * @param {string}           date         The check date
 * @param {LiturgicalRecord} season       The liturgical season record
 * @param {RosarySeries}     rosarySeries The rosary series
 *
 * @returns {DayResponse}
 */
const getDayResponse = (date: string, season: LiturgicalRecord, rosarySeries: RosarySeries): DayResponse => {
  const response: DayResponse = {
    date: date,
    season: season.season,
    'sunday-cycle': season['sunday-cycle'],
    'weekday-cycle': season['weekday-cycle'],
    'loth-volume': season['loth-volume'],
    'rosary-series': rosarySeries
  }

  return response
}
