import { LiturgicalRecord, RosaryWeek, WeekResponse } from '../../../src/ts/datatypes'
import { getCheckTime, getResponseHeaders, returnError } from '../../../src/ts/http'
import { getRosaryWeekForSeason } from '../../../src/ts/rosary'
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
    const season: LiturgicalRecord = getCurrentSeason(getCheckTime(date))
    const rosaryWeek: RosaryWeek = getRosaryWeekForSeason(season.season)
    const response: WeekResponse = getWeekResponse(date, season, rosaryWeek)
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
 * @param {string}           date       The check date
 * @param {LiturgicalRecord} season     The liturgical season record
 * @param {RosaryWeek}       rosaryWeek The rosary week record
 *
 * @returns {WeekResponse}
 */
const getWeekResponse = (date: string, season: LiturgicalRecord, rosaryWeek: RosaryWeek): WeekResponse => {
  const response: WeekResponse = {
    date,
    season: season.season,
    'sunday-cycle': season['sunday-cycle'],
    'weekday-cycle': season['weekday-cycle'],
    'loth-volume': season['loth-volume'],
    'rosary-week': rosaryWeek
  }

  return response
}
