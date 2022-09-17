import { LiturgicalRecord, RosaryDays, RosaryWeek, WeekResponse } from '../../src/ts/datatypes'
import { getCheckTime, getResponseHeaders, returnError } from '../../src/ts/http'
import { getRosaryDaysForSeason, getRosaryWeekForSeason } from '../../src/ts/rosary'
import { getCurrentSeason } from '../../src/ts/season'

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
    const timestamp = searchParams.get('timestamp') ?? ''
    const date = searchParams.get('date') ?? ''
    const check = getCheckTime(timestamp, date)
    const season: LiturgicalRecord = getCurrentSeason(check)
    const rosaryDays: RosaryDays = getRosaryDaysForSeason(season.season)
    const rosaryWeek: RosaryWeek = getRosaryWeekForSeason(season.season)
    const response: WeekResponse = getWeekResponse(check, season, rosaryWeek, rosaryDays)
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
 * @param {number}           check        The check timestamp
 * @param {LiturgicalRecord} season       The liturgical season record
 * @param {RosarySeries}     rosarySeries The rosary series
 *
 * @returns {DayResponse}
 */
const getWeekResponse = (
  check: number,
  season: LiturgicalRecord,
  rosaryWeek: RosaryWeek,
  rosaryDays: RosaryDays
): WeekResponse => {
  const response: WeekResponse = {
    timestamp: check,
    season: season.season,
    'sunday-cycle': season['sunday-cycle'],
    'weekday-cycle': season['weekday-cycle'],
    'loth-volume': season['loth-volume'],
    'rosary-days': rosaryDays,
    'rosary-week': rosaryWeek
  }

  return response
}
