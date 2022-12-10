const fs = require('fs');
const csv = require('csv');
const cal = require("./createEventinCalendar.js");
const dataAd = require("./dataAd.js");

// npm install csv
// npm install node-google-calendar

main(process.argv);

function main(argv) {
    // check file undefined
    if (!argv[2]) {
        console.log("You need to choose which file you use!");
        return;
    }

    fs.createReadStream(__dirname + argv[2].slice(1))
    .pipe(csv.parse({columns: true}, function(err, data) {
        //dataAd.dataAdusting(data);
        dataAd.dataAdjustingFromTime(data);
        //console.log(data[7])
        //console.log(Object.values(data[7])[0])
    }));
}