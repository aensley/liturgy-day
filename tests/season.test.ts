/**
 * Test season
 *
 * @group unit
 */

import { LiturgicalRecord, LotHVolume, Season, SundayCycle, WeekdayCycle } from '../src/ts/datatypes'
import { getCurrentSeason } from '../src/ts/season'

describe('[UNIT] getCurrentSeason()', () => {
  test('should return Christmas', () => {
    const expectedResult: LiturgicalRecord = {
      start: 1671926400,
      season: Season.Christmas,
      'sunday-cycle': SundayCycle.A,
      'weekday-cycle': WeekdayCycle.Season,
      'loth-volume': LotHVolume.I
    }
    expect(getCurrentSeason(1671926400)).toEqual(expectedResult)
  })
  test('should error on a date too far in the past', () => {
    expect(() => getCurrentSeason(1638057599)).toThrowError('Date is too far in the past')
  })
  test('should error on a date too far in the future', () => {
    expect(() => getCurrentSeason(1703462401)).toThrowError('Date is too far in the future')
  })
})
