import { SeasonData } from './data'
import { LiturgicalRecord } from './datatypes'

/**
 * Get the current liturgical season for the given timestamp.
 *
 * @param {number} check The timestamp to check
 *
 * @returns {LiturgicalRecord}
 */
export const getCurrentSeason = (check: number): LiturgicalRecord => {
  let currentRecord: LiturgicalRecord
  let previousRecord: LiturgicalRecord | null = null
  for (currentRecord of SeasonData) {
    if (previousRecord != null && previousRecord.start <= check && check < currentRecord.start) {
      return previousRecord // This represents the current season
    }

    if (previousRecord == null && check < currentRecord.start) {
      throw new Error('Date is too far in the past')
    }

    previousRecord = currentRecord
  }

  throw new Error('Date is too far in the future')
}
