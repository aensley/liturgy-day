/**
 * Test date
 *
 * @group unit
 */

import { isValidDate } from '../src/ts/date'

describe('[UNIT] isValidDate()', () => {
  test('should properly validate dates', () => {
    const tests = {
      '0000000000-00-00': false,
      '0000-00-00': false,
      '2015-01-40': false,
      '2016-11-25': true,
      '1970-01-01': true,
      '2016-02-29': true,
      '2017-02-29': false,
      '2017-13-01': false,
      '2000-00-01': false,
      '2000-01-00': false
    }
    for (const date in tests) {
      expect(isValidDate(date)).toEqual(tests[date])
    }
  })
})
