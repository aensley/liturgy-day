// Advent begins 4 Sundays before Christmas

// Christmas ends on the Feast of the Baptism
// Pope Paul VI set its date as the first Sunday after January 6 (as early as January 7 or as late as January 13) or, if in a particular country the Epiphany is celebrated on Sunday January 7 or Sunday January 8, on Monday January 8 or Monday January 9.

// Lent begins on Ash Wednesday and ends on Holy Saturday

// Easter lasts until Pentecost

// Ordinary time is all time from Christmas to Lent and Pentecost to Advent

// Weekday cycle does not apply to Advent, Christmas, Lent, or Easter

export enum Season {
  Advent,
  Christmas,
  Lent,
  Easter,
  OrdinaryTime
}

export enum SundayCycle {
  A,
  B,
  C
}

export enum WeekdayCycle {
  I,
  II,
  Season
}

export enum LoTHVolume {
  I, // Advent, Christmas
  II, // Lent, Triduum, Easter
  III, // Ordinary Time Weeks 1-17
  IV // Ordinary Time Weeks 18-34
}

export interface LiturgicalRecords extends Array<LiturgicalRecord> {}

export interface LiturgicalRecord {
  Start: number // Timestamp
  Season: Season
  SundayCycle: SundayCycle
  WeekdayCycle: WeekdayCycle
  LoTHVolume: LoTHVolume
}
