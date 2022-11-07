const fs = require('fs');
const csv = require('csv');
const cal = require("./createEventinCalendar.js");
const dataAd = require("./dataAd.js");

//npm install csv

fs.createReadStream(__dirname + "/shift.csv")
  .pipe(csv.parse({columns: true}, function(err, data) {
      dataAd.dataAdusting(data);
      //console.log(data[7])
      //console.log(Object.values(data[7])[0])
  }));