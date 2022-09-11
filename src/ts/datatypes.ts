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
