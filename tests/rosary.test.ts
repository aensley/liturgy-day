import { RosarySeries, RosaryWeek, Season } from '../src/ts/datatypes'
import { getCurrentRosarySeries, getRosaryWeekForSeason } from '../src/ts/rosary'

describe('Testing Rosary', () => {
  test('Test OrdinaryTime RosaryWeek', () => {
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
  test('Test OrdinaryTime Sunday RosarySeries', () => {
    expect(getCurrentRosarySeries(1700956800)) // 2023-11-26 (Last Sunday in OT before Advent)
      .toEqual(RosarySeries.Glorious)
  })
  test('Test Advent Sunday RosarySeries', () => {
    expect(getCurrentRosarySeries(1701561600)) // 2023-12-03 (First Sunday of Advent)
      .toEqual(RosarySeries.Joyful)
  })
})
