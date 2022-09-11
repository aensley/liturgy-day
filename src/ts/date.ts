import { Weekday } from './datatypes'

/**
 * Validates that the given date string is a valid date in the proper format.
 *
 * @param {string} date The date string to validate.
 *
 * @returns {boolean}
 */
export const isValidDate = (date: string): boolean => {
  if (date.length !== 10) {
    return false
  }

  if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
    return false
  }

  return new Date(date).toISOString().slice(0, 10) === date
}

/**
 * Gets the day of the week for a given timestamp.
 *
 * @param {number} timestamp The timestamp to check (in seconds; not milliseconds).
 *
 * @returns {Weekday}
 */
export const getDayOfWeek = (timestamp: number): Weekday => {
  timestamp = timestamp * 1000
  const timezoneOffset = new Date(timestamp).getTimezoneOffset() * 60 * 1000
  timestamp += timezoneOffset
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(timestamp)) as Weekday
}
