export const secondsToMinutes = (seconds) => {
  return Math.floor(seconds / 60);
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


