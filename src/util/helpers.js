export const secondsToMinutes = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const hoursPart = hours > 0 ? `${hours} hr` : "";
  const minutesPart = minutes > 0 ? `${minutes} min` : "";

  return `${hoursPart} ${minutesPart}`;
};

export const countPhoneCalls = (calls) => {
  const phoneCallCounts = {};
  for (const call of calls) {
    const phoneNumber = call.direction === "inbound" ? call.from : call.to;
    if (phoneCallCounts[phoneNumber]) {
      phoneCallCounts[phoneNumber]++;
    } else {
      phoneCallCounts[phoneNumber] = 1;
    }
  }
  return phoneCallCounts;
};

export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
