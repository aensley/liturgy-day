import { getResponseHeaders } from '../../src/ts/http'
import { version } from '../../package.json'

export const onRequestGet = async (_context: any): Promise<Response> => {
  return new Response(JSON.stringify({ version }), { headers: getResponseHeaders(), status: 200 })
}
