import {
  LiturgicalRecords,
  LotHVolume,
  Season,
  SundayCycle,
  WeekdayCycle,
  RosarySeries,
  RosaryWeeks
} from './datatypes'

export const RosaryData: RosaryWeeks = {
  'Ordinary Time': {
    Sunday: RosarySeries.Glorious,
    Monday: RosarySeries.Joyful,
    Tuesday: RosarySeries.Sorrowful,
    Wednesday: RosarySeries.Glorious,
    Thursday: RosarySeries.Luminous,
    Friday: RosarySeries.Sorrowful,
    Saturday: RosarySeries.Joyful
  },
  Advent: {
    Sunday: RosarySeries.Joyful,
    Monday: RosarySeries.Joyful,
    Tuesday: RosarySeries.Sorrowful,
    Wednesday: RosarySeries.Glorious,
    Thursday: RosarySeries.Luminous,
    Friday: RosarySeries.Sorrowful,
    Saturday: RosarySeries.Joyful
  },
  Christmas: {
    Sunday: RosarySeries.Joyful,
    Monday: RosarySeries.Joyful,
    Tuesday: RosarySeries.Sorrowful,
    Wednesday: RosarySeries.Glorious,
    Thursday: RosarySeries.Luminous,
    Friday: RosarySeries.Sorrowful,
    Saturday: RosarySeries.Joyful
  },
  Lent: {
    Sunday: RosarySeries.Sorrowful,
    Monday: RosarySeries.Joyful,
    Tuesday: RosarySeries.Sorrowful,
    Wednesday: RosarySeries.Glorious,
    Thursday: RosarySeries.Luminous,
    Friday: RosarySeries.Sorrowful,
    Saturday: RosarySeries.Joyful
  },
  Easter: {
    Sunday: RosarySeries.Glorious,
    Monday: RosarySeries.Joyful,
    Tuesday: RosarySeries.Sorrowful,
    Wednesday: RosarySeries.Glorious,
    Thursday: RosarySeries.Luminous,
    Friday: RosarySeries.Sorrowful,
    Saturday: RosarySeries.Joyful
  }
}

export const SeasonData: LiturgicalRecords = [
  {
    start: 1638057600, // 2021-11-28 12AM UTC
    season: Season.Advent,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1640390400, // 2021-12-25 12AM UTC
    season: Season.Christmas,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1641772800, // 2022-01-10 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.II,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1646179200, // 2022-03-02 12AM UTC
    season: Season.Lent,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1650153600, // 2022-04-17 12AM UTC
    season: Season.Easter,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1654473600, // 2022-06-06 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.II,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1659225600, // 2022-07-31 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.II,
    'loth-volume': LotHVolume.IV
  },
  {
    start: 1669507200, // 2022-11-27 12AM UTC
    season: Season.Advent,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1671926400, // 2022-12-25 12AM UTC
    season: Season.Christmas,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1673222400, // 2023-01-09 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.I,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1677024000, // 2023-02-22 12AM UTC
    season: Season.Lent,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1680998400, // 2023-04-09 12AM UTC
    season: Season.Easter,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1685318400, // 2023-05-29 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.I,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1691280000, // 2023-08-06 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.I,
    'loth-volume': LotHVolume.IV
  },
  {
    start: 1701561600, // 2023-12-03 12AM UTC
    season: Season.Advent,
    'sunday-cycle': SundayCycle.B,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1703462400, // 2023-12-25 12AM UTC
    season: Season.Christmas,
    'sunday-cycle': SundayCycle.B,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1704758400, // 2024-01-09 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.B,
    'weekday-cycle': WeekdayCycle.II,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1707868800, // 2024-02-14 12AM UTC
    season: Season.Lent,
    'sunday-cycle': SundayCycle.B,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1711886400, // 2024-03-31 12AM UTC
    season: Season.Easter,
    'sunday-cycle': SundayCycle.B,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1716206400, // 2024-05-20 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.B,
    'weekday-cycle': WeekdayCycle.II,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1722772800, // 2024-08-04 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.B,
    'weekday-cycle': WeekdayCycle.II,
    'loth-volume': LotHVolume.IV
  },
  {
    start: 1733054400, // 2024-12-01 12AM UTC
    season: Season.Advent,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1735128000, // 2024-12-25 12AM UTC
    season: Season.Christmas,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1736769600, // 2025-01-13 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.I,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1741176000, // 2025-03-05 12AM UTC
    season: Season.Lent,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1745150400, // 2025-04-20 12AM UTC
    season: Season.Easter,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.II
  },
  {
    start: 1749470400, // 2025-06-09 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.I,
    'loth-volume': LotHVolume.III
  },
  {
    start: 1754222400, // 2025-08-03 12AM UTC
    season: Season.OrdinaryTime,
    'sunday-cycle': SundayCycle.C,
    'weekday-cycle': WeekdayCycle.I,
    'loth-volume': LotHVolume.IV
  },
  {
    start: 1764504000, // 2025-11-30 12AM UTC
    season: Season.Advent,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  },
  {
    start: 1766664000, // 2025-12-25 12AM UTC
    season: Season.Christmas,
    'sunday-cycle': SundayCycle.A,
    'weekday-cycle': WeekdayCycle.Season,
    'loth-volume': LotHVolume.I
  }
]
