import { isValidDate } from './date'

/**
 * Return the proper response when an error is encountered.
 *
 * @param {any} e Error object
 *
 * @returns {Promise<Response>}
 */
export const returnError = async (e: any): Promise<Response> => {
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

  return new Response(JSON.stringify({ error: e.message }), { headers: getResponseHeaders(), status: statusNumber })
}

/**
 * Resolve the given parameters (if any) and returns the timestamp to check.
 *
 * @param timestamp The timestamp supplied to the request.
 * @param date The date supplied to the request.
 *
 * @returns {number}
 */
export const getCheckTime = (timestamp: string, date: string): number => {
  let check = Math.floor(Date.now() / 1000)
  const timestampNumber = parseInt(timestamp)
  if (Number.isInteger(timestampNumber)) {
    check = timestampNumber
  } else if (isValidDate(date)) {
    check = Math.floor(new Date(date).getTime() / 1000)
  }

  return check
}

/**
 * Get the Headers object to return with responses.
 *
 * @returns {Headers}
 */
export const getResponseHeaders = (): Headers => {
  const responseHeaders = new Headers()
  responseHeaders.set('Access-Control-Allow-Origin', '*')
  responseHeaders.set('Content-Type', 'application/json')
  return responseHeaders
}
