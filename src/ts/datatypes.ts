export enum RosarySeries {
  Glorious = 'Glorious',
  Joyful = 'Joyful',
  Luminous = 'Luminous',
  Sorrowful = 'Sorrowful'
}

export enum Weekday {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday'
}

export enum Season {
  Advent = 'Advent',
  Christmas = 'Christmas',
  Lent = 'Lent',
  Easter = 'Easter',
  OrdinaryTime = 'Ordinary Time'
}

export enum SundayCycle {
  A = 'A',
  B = 'B',
  C = 'C'
}

export enum WeekdayCycle {
  I = 'I',
  II = 'II',
  Season = 'Season'
}

export enum LotHVolume {
  I = 'I', // Advent, Christmas
  II = 'II', // Lent, Triduum, Easter
  III = 'III', // Ordinary Time Weeks 1-17
  IV = 'IV' // Ordinary Time Weeks 18-34
}

export interface LiturgicalRecords extends Array<LiturgicalRecord> {}

export interface LiturgicalRecord {
  start: number // Timestamp
  season: Season
  'sunday-cycle': SundayCycle
  'weekday-cycle': WeekdayCycle
  'loth-volume': LotHVolume
}

export interface RosaryWeeks {
  'Ordinary Time': RosaryWeek
  Advent: RosaryWeek
  Christmas: RosaryWeek
  Lent: RosaryWeek
  Easter: RosaryWeek
}

export interface RosaryWeek {
  Sunday: RosarySeries
  Monday: RosarySeries
  Tuesday: RosarySeries
  Wednesday: RosarySeries
  Thursday: RosarySeries
  Friday: RosarySeries
  Saturday: RosarySeries
}

export interface RosaryDays {
  Glorious: Weekday[]
  Joyful: Weekday[]
  Luminous: Weekday[]
  Sorrowful: Weekday[]
}

export interface DayResponse {
  date: string
  season: Season
  'sunday-cycle': SundayCycle
  'weekday-cycle': WeekdayCycle
  'loth-volume': LotHVolume
  'rosary-series': RosarySeries
}

export interface WeekResponse {
  date: string
  season: Season
  'sunday-cycle': SundayCycle
  'weekday-cycle': WeekdayCycle
  'loth-volume': LotHVolume
  'rosary-week': RosaryWeek
}

export interface RosaryDaysResponse {
  date: string
  season: Season
  'rosary-days': RosaryDays
}
