export function timeToSeconds(time: string): number {
  const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

  const hoursInSeconds = Number(hours) * 3600;
  const minuteInSeconds = Number(minutes) * 60;

  return hoursInSeconds + minuteInSeconds + Number(seconds)
}