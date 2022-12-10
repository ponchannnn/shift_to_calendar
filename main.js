const fs = require('fs');
const csv = require('csv');
const cal = require("./createEventinCalendar.js");
const dataAd = require("./dataAd.js");

// npm install csv
// npm install node-google-calendar

main(process.argv);

function main(argv) {
    fs.createReadStream(__dirname + argv[2])
    .pipe(csv.parse({columns: true}, function(err, data) {
        //dataAd.dataAdusting(data);
        dataAd.dataAdjustingFromTime(data);
        //console.log(data[7])
        //console.log(Object.values(data[7])[0])
    }));
}