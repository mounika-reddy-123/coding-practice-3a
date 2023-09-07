const addDays = require("date-fns/addDays");
function getDateAfterxDays(days) {
  let date = new Date();
  let dateAfterxDays = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDay()),
    days
  );
  let resDate = `${dateAfterxDays.getDate()}-${
    dateAfterxDays.getMonth() + 1
  }-${dateAfterxDays.getFullYear()}`;
  console.log(resDate);
}

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(getDateAfterxDays(100));
});

module.exports = app;
