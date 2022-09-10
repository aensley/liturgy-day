import { load } from 'js-yaml'
import { readFileSync } from 'fs'
import { LiturgicalRecords, LiturgicalRecord } from 'datatypes'

let liturgicalRecords: LiturgicalRecords | null = null

/**
 * Get the current liturgical season for the given timestamp.
 *
 * @param {number} check The timestamp to check
 *
 * @returns {LiturgicalRecord}
 */
export const getCurrentSeason = (check: number): LiturgicalRecord => {
  const records = getLiturgicalRecords()
  let currentRecord: LiturgicalRecord
  let previousRecord: LiturgicalRecord | null = null
  for (currentRecord of records) {
    if (previousRecord != null) {
      if (previousRecord.start <= check && check < currentRecord.start) {
        return previousRecord // This represents the current season
      }
    } else {
      if (check < currentRecord.start) {
        throw new Error('Date is too far in the past')
      }
    }

    previousRecord = currentRecord
  }

  throw new Error('Date is too far in the future')
}

/**
 * Get the Liturgical Records from YAML in the /data directory. Load the data only once.
 *
 * @returns {LiturgicalRecords}
 */
const getLiturgicalRecords = (): LiturgicalRecords => {
  if (liturgicalRecords === null) {
    liturgicalRecords = load(readFileSync('src/data/liturgical-records.yml', 'utf8')) as LiturgicalRecords
  }

  return liturgicalRecords
}
