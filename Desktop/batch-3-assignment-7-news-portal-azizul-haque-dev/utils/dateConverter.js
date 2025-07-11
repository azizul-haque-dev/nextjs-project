export function dateConverter(date) {
  let now = new Date();
  let postDate = new Date(date);
  const diffSeconds = Math.abs(now - postDate) / 1000;

  const timeUnits = [
    { unit: "year", seconds: 31536000 },
    { unit: "month", seconds: 2592000 },
    { unit: "day", seconds: 86400 },
    { unit: "hour", seconds: 3600 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 }
  ];
  for (const { unit, seconds } of timeUnits) {
    const count = Math.floor(diffSeconds / seconds);
    if (count >= 1) {
      return `${count} ${unit}${count !== 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}
