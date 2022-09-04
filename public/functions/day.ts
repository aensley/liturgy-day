import { load } from 'js-yaml'
import { readFileSync } from 'node:fs'
import { LiturgicalRecords, LiturgicalRecord } from '../src/datatypes'

const liturgicalRecords = load(readFileSync('data/liturgical-records.yml', 'utf8')) as LiturgicalRecords

const check = Math.floor(Date.now() / 1000)

export const getCurrentSeason = (check: number): LiturgicalRecord => {
  let currentLiturgicalRecord: LiturgicalRecord
  let previousLiturgicalRecord: LiturgicalRecord
  for (currentLiturgicalRecord of liturgicalRecords) {
    if (previousLiturgicalRecord) {
      if (previousLiturgicalRecord.Start < check && check < currentLiturgicalRecord.Start) {
        return previousLiturgicalRecord // This represents the current season
      }
    } else {
      if (check < currentLiturgicalRecord.Start) {
        // Invalid result
        console.log('Date is too far in the past')
        return null
      }
    }

    previousLiturgicalRecord = currentLiturgicalRecord
  }

  return null
}

console.log(getCurrentSeason(check))

/*
const options1 = Intl.DateTimeFormat().resolvedOptions();
console.log(options1);

{
  locale: "en-US",
  calendar: "gregory",
  numberingSystem: "latn",
  timeZone: "America/Chicago",
  year: "numeric",
  month: "numeric",
  day: "numeric"
}

int now = new Date().getTimezoneOffset() // in minutes, e.g. 300 for UTC-5

*/
