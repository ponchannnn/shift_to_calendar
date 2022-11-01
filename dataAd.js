const coma = require("./coma.json");
const cal = require("./createEventinCalendar.js");

module.exports = {
    dataAdusting : dataAdusting
}

function dataAdusting (data) {
    let n = 0;
    while (data[n]["日付"] !== "") {
        if (data[n]["日付"] !== "/^20\d{2}/([0][1-9]|[1][0-2])/[1-31]$/") continue; 
        let dataArray = data[n]["日付"].split("/");
        //min
        let m = 0;
        while (data[n][coma.enum[m]] = "") {
            console.log("a");
            if (m == coma.enum.length) break;
            m++;
        }
        //max
        let min = coma.enum[m];
        
        m = coma.enum.length;
        while (data[n][coma.enum[m]] = "") {
            console.log("b");
            if (m == 0) break;
            m--;
        }

        let max = coma.enum[m];

        if (min == max || min == coma.enum[coma.enum.length] || max == coma.enum[0]) continue;

        min = coma.detail[min].startTime;
        max = coma.detail[max].endTime;

        
        console.log(`${dataArray[0]},${dataArray[1]},${dataArray[2]},${min},${max}`);
        //cal.create(dataArray[0], dataArray[1], dataArray[2],min, max);
        n++;
        break;
    }

    
}