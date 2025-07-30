export function isDateInBetween(date, from, to) {
  return (
    new Date(date).getTime() >= new Date(from).getTime() &&
    new Date(date).getTime() <= new Date(to).getTime()
  );
}
