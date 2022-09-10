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

  return /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)
}
