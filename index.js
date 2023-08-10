var addDays = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);
  return `newDate.getDate()`, `newDate.getMonth()`, `newDate.getFullYear()`;
};
module.exports = getDateAfterXDays;
