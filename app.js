const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

function getDateAfterxDays(days) {
  let date = new Date();
  let dateAfterxDays = addDays(new Date(), days);
  return dateAfterxDays;
}
dateAfterxDays = getDateAfterxDays(100);
let resDate = `${dateAfterxDays.getDate()}-${
  dateAfterxDays.getMonth() + 1
}-${dateAfterxDays.getFullYear()}`;
console.log(resDate);

app.get("/", (request, response) => {
  response.send(resDate);
});

app.listen(3000);

module.exports = app;
