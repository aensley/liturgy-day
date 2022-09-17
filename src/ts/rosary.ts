import { RosaryData } from './data'
import { RosaryDays, RosarySeries, RosaryWeek, Season } from './datatypes'
import { getDayOfWeek } from './date'
import { getCurrentSeason } from './season'

/**
 * Get the weekly schedule for rosary series for the given season.
 *
 * @param {Season} season The season to get the rosary week for.
 *
 * @returns {RosaryWeek}
 */
export const getRosaryWeekForSeason = (season: Season): RosaryWeek => {
  return RosaryData[season]
}

/**
 * Get the days of the week for each rosary series according during the given season.
 *
 * @param {Season} season The season to get the rosary days for.
 *
 * @returns {RosaryDays}
 */
export const getRosaryDaysForSeason = (season: Season): RosaryDays => {
  const rosaryDays: RosaryDays = {
    Glorious: [],
    Joyful: [],
    Luminous: [],
    Sorrowful: []
  }

  const rosaryWeek: RosaryWeek = getRosaryWeekForSeason(season)
  for (const day in rosaryWeek) {
    rosaryDays[rosaryWeek[day]].push(day)
  }

  return rosaryDays
}

/**
 * Get the Rosary Series for the given date.
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
