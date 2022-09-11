// Advent begins 4 Sundays before Christmas

// Christmas ends on the Feast of the Baptism
// Pope Paul VI set its date as the first Sunday after January 6 (as early as January 7 or as late as January 13) or, if in a particular country the Epiphany is celebrated on Sunday January 7 or Sunday January 8, on Monday January 8 or Monday January 9.

// Lent begins on Ash Wednesday and ends on Holy Saturday

// Easter lasts until Pentecost

// Ordinary time is all time from Christmas to Lent and Pentecost to Advent

// Weekday cycle does not apply to Advent, Christmas, Lent, or Easter

export enum RosarySeries {
  Glorious = 'Glorious',
  Joyful = 'Joyful',
  Luminous = 'Luminous',
  Sorrowful = 'Sorrowful'
}

export enum Season {
  Advent = 'Advent',
  Christmas = 'Christmas',
  Lent = 'Lent',
  Easter = 'Easter',
  OrdinaryTime = 'OrdinaryTime'
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
