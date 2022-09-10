// https://jestjs.io/
import { getCurrentSeason } from '../src/ts/season'

describe('Testing Season', () => {
  test('Test Christmas 2023', () => {
    const expectedResult = {
      start: 1671926400,
      season: 'Christmas',
      'sunday-cycle': 'A',
      'weekday-cycle': 'Season',
      'loth-volume': 'I'
    }
    expect(getCurrentSeason(1671926400)).toEqual(expectedResult)
  })
  test('Test a value too far in the past', () => {
    expect(() => getCurrentSeason(1638057599)).toThrowError('Date is too far in the past')
  })
  test('Test a value too far in the future', () => {
    expect(() => getCurrentSeason(1703462401)).toThrowError('Date is too far in the future')
  })
})
