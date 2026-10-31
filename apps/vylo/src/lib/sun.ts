/**
 * Sun position maths (NOAA solar calculator, accurate to about a minute outside the polar circles):
 * sunrise, sunset and the photographers' windows around them, for any place and date.
 */
const rad = Math.PI / 180;
const deg = 180 / Math.PI;

interface SunState {
  declination: number;
  /** Minutes the apparent solar noon is ahead of mean noon */
  equationOfTime: number;
}

function sunState(julianDay: number): SunState {
  const T = (julianDay - 2451545) / 36525;
  const l0 = (280.46646 + T * (36000.76983 + T * 0.0003032)) % 360;
  const m = 357.52911 + T * (35999.05029 - 0.0001537 * T);
  const e = 0.016708634 - T * (0.000042037 + 0.0000001267 * T);
  const c = Math.sin(m * rad) * (1.914602 - T * (0.004817 + 0.000014 * T)) + Math.sin(2 * m * rad) * (0.019993 - 0.000101 * T) + Math.sin(3 * m * rad) * 0.000289;
  const lambda = l0 + c - 0.00569 - 0.00478 * Math.sin((125.04 - 1934.136 * T) * rad);
  const eps0 = 23 + (26 + (21.448 - T * (46.815 + T * (0.00059 - T * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos((125.04 - 1934.136 * T) * rad);
  const y = Math.tan((eps * rad) / 2) ** 2;
  const eq =
    4 * deg * (y * Math.sin(2 * l0 * rad) - 2 * e * Math.sin(m * rad) + 4 * e * y * Math.sin(m * rad) * Math.cos(2 * l0 * rad) - 0.5 * y * y * Math.sin(4 * l0 * rad) - 1.25 * e * e * Math.sin(2 * m * rad));
  return { declination: Math.asin(Math.sin(eps * rad) * Math.sin(lambda * rad)) * deg, equationOfTime: eq };
}

export interface SunDay {
  /** Instants (UTC); undefined where the sun does not reach the angle that day (polar day/night) */
  sunrise?: Date;
  sunset?: Date;
  solarNoon: Date;
  /** Sun between the horizon and 6° up: the warm, low light photographers wait for */
  goldenMorning?: [Date, Date];
  goldenEvening?: [Date, Date];
  /** Sun between 4° and 8° below the horizon: deep blue sky after sunset / before sunrise */
  blueMorning?: [Date, Date];
  blueEvening?: [Date, Date];
}

/**
 * Sun events for the calendar day `y-m-d` at the place. The day is the one whose solar noon falls on that
 * date at the given longitude, so results are right whatever the time zone.
 */
export function sunDay(y: number, m: number, d: number, lat: number, lng: number): SunDay {
  // Mean solar noon at this longitude, in minutes after 00:00 UTC of the date.
  const noonUtc = Date.UTC(y, m - 1, d, 12) - (lng / 15) * 3_600_000;
  const jd = noonUtc / 86_400_000 + 2440587.5;
  const { declination, equationOfTime } = sunState(jd);
  const solarNoonMin = 720 - 4 * lng - equationOfTime;
  const at = (minutes: number) => new Date(Date.UTC(y, m - 1, d) + minutes * 60_000);
  const hourAngle = (elevation: number) => {
    const cos = (Math.sin(elevation * rad) - Math.sin(lat * rad) * Math.sin(declination * rad)) / (Math.cos(lat * rad) * Math.cos(declination * rad));
    return cos < -1 || cos > 1 ? undefined : Math.acos(cos) * deg;
  };
  const pair = (elevation: number): [Date, Date] | undefined => {
    const h = hourAngle(elevation);
    return h === undefined ? undefined : [at(solarNoonMin - 4 * h), at(solarNoonMin + 4 * h)];
  };
  const horizon = pair(-0.833);
  const six = pair(6);
  const blueA = pair(-4);
  const blueB = pair(-8);
  return {
    sunrise: horizon?.[0],
    sunset: horizon?.[1],
    solarNoon: at(solarNoonMin),
    // Where the sun never climbs 6° (high latitudes in winter) the light stays low all day.
    goldenMorning: horizon ? [horizon[0], six ? six[0] : at(solarNoonMin)] : undefined,
    goldenEvening: horizon ? [six ? six[1] : at(solarNoonMin), horizon[1]] : undefined,
    blueMorning: blueA && blueB ? [blueB[0], blueA[0]] : undefined,
    blueEvening: blueA && blueB ? [blueA[1], blueB[1]] : undefined,
  };
}
