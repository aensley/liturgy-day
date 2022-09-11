import { DayResponse, LiturgicalRecord, RosarySeries } from '../../src/ts/datatypes'
import { isValidDate } from '../../src/ts/date'
import { getCurrentRosarySeries } from '../../src/ts/rosary'
import { getCurrentSeason } from '../../src/ts/season'

export const onRequestGet = async function (context): Promise<Response> {
  try {
    const { searchParams } = new URL(context.request.url)
    const timestamp = searchParams.get('timestamp')
    const date = searchParams.get('date')
    console.log(timestamp)
    console.log(date)
    let check = Math.floor(Date.now() / 1000)
    if (typeof timestamp === 'number' && Number.isInteger(timestamp)) {
      check = parseInt(timestamp)
    } else if (typeof date === 'string' && isValidDate(date)) {
      check = Math.floor(new Date(date).getTime() / 1000)
    }

    const season: LiturgicalRecord = getCurrentSeason(check)
    const rosarySeries: RosarySeries = getCurrentRosarySeries(check)
    const response: DayResponse = {
      timestamp: check,
      season: season.season,
      'sunday-cycle': season['sunday-cycle'],
      'weekday-cycle': season['weekday-cycle'],
      'loth-volume': season['loth-volume'],
      'rosary-series': rosarySeries
    }
    return new Response(JSON.stringify(response), { status: 200 })
  } catch (e) {
    switch (e.constructor) {
      case Error:
        return new Response(JSON.stringify({ error: e.message }), { status: 400 })
      case RangeError:
        return new Response(JSON.stringify({ error: e.message }), { status: 400 })
      default:
        return new Response(JSON.stringify({ error: e.message }), { status: 500 })
    }
  }
}
