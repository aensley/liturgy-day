import { RosaryData } from './data'
import { RosarySeries, RosaryWeek, Season } from './datatypes'
import { getDayOfWeek } from './date'
import { getCurrentSeason } from './season'

/**
 * Gets the weekly schedule for rosary series for the given season.
 *
 * @param {Season} season The season to get the rosary week for.
 *
 * @returns {RosaryWeek}
 */
export const getRosaryWeekForSeason = (season: Season): RosaryWeek => {
  return RosaryData[season]
}

/**
 * Gets the Rosary Series for the given date.
 *
 * @param {number}  timestamp The UNIX timestamp of the date to check.
 * @param {Season=} season    The Season of the given timestamp. Will be calculated if not supplied.
 *
 * @returns {RosarySeries}
 */
export const getCurrentRosarySeries = (timestamp: number, season: Season | null = null): RosarySeries => {
  const dayOfWeek = getDayOfWeek(timestamp)
  if (season == null) {
    season = getCurrentSeason(timestamp).season
  }

  return RosaryData[season][dayOfWeek]
}
