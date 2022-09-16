/**
 * Test rosary
 *
 * @group unit
 */

import { RosarySeries, RosaryWeek, Season } from '../src/ts/datatypes'
import { getCurrentRosarySeries, getRosaryWeekForSeason } from '../src/ts/rosary'

describe('[UNIT] getRosaryWeekForSeason()', () => {
  test('should return the correct rosary week', () => {
    const expectedResult: RosaryWeek = {
      Sunday: RosarySeries.Glorious,
      Monday: RosarySeries.Joyful,
      Tuesday: RosarySeries.Sorrowful,
      Wednesday: RosarySeries.Glorious,
      Thursday: RosarySeries.Luminous,
      Friday: RosarySeries.Sorrowful,
      Saturday: RosarySeries.Joyful
    }
    expect(getRosaryWeekForSeason(Season.OrdinaryTime)).toEqual(expectedResult)
  })
})

describe('[UNIT] getCurrentRosarySeries()', () => {
  test('should return "Glorious" for a Sunday in ordinary time', () => {
    expect(getCurrentRosarySeries(1700956800)) // 2023-11-26 (Last Sunday in OT before Advent)
      .toEqual(RosarySeries.Glorious)
  })
  test('should return "Joyful" for a Sunday in Advent', () => {
    expect(getCurrentRosarySeries(1701561600)) // 2023-12-03 (First Sunday of Advent)
      .toEqual(RosarySeries.Joyful)
  })
})
