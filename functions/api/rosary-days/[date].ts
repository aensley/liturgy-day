import { LiturgicalRecord, RosaryDays, RosaryDaysResponse } from '../../../src/ts/datatypes'
import { getCheckTime, getResponseHeaders, returnError } from '../../../src/ts/http'
import { getRosaryDaysForSeason } from '../../../src/ts/rosary'
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
    const rosaryDays: RosaryDays = getRosaryDaysForSeason(season.season)
    const response: RosaryDaysResponse = getRosaryDaysResponse(date, season, rosaryDays)
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
 * @param {RosaryDays}       rosaryDays The rosary days record
 *
 * @returns {RosaryDaysResponse}
 */
const getRosaryDaysResponse = (date: string, season: LiturgicalRecord, rosaryDays: RosaryDays): RosaryDaysResponse => {
  const response: RosaryDaysResponse = {
    date: date,
    season: season.season,
    'rosary-days': rosaryDays
  }

  return response
}
