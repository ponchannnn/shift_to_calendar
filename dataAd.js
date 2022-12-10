const coma = require("./coma.json");
const cal = require("./createEventinCalendar.js");
const cells = require();

//   npm install aspose.cells

module.exports = {
    dataAdusting : dataAdusting,
    dataAdjustingFromTime : dataAdjustingFromTime
}

function dataAdusting (data) {

    for (n in data) {
        //let nrm = "/^20\d{2}/(0?[1-9]|[1][0-2])/([0][1-9]|[1-2][0-9]|[3][0-1])$/";
        //if (nrm.match(data[n][dataKey[0]]) == null) {console.log(data[n][dataKey[0]]); return;}
        let dataObj = Object.values(data[n]);
        let date = dataObj[0].split("/");
        //min
        let m = 0;

        while (data[n][coma.enumStart[m]] !== coma.circle) {
            if (m == coma.enumStart.length) break;
            m++;
        }

        let min = coma.enumStart[m];

        //max

        m = coma.enumEnd.length - 1;
        while (data[n][coma.enumEnd[m]] !== coma.circle) {
            if (m == 0) break;
            m--;
        }
        let max = coma.enumEnd[m];

        if (min == max || min == coma.enumStart[coma.enumStart.length] || max == coma.enumEnd[0]) continue;
        min = coma.detail[min].startTime;
        max = coma.detail[max].endTime;

        
        //console.log(`${date[0]},${date[1]},${date[2]},${min},${max}`);
        cal.create(date[0], date[1], date[2],min, max);
        break;
    }

    
}

function dataAdjustingFromTime(data) {// from start time n end time
    for (n in data) {
        //let nrm = "/^20\d{2}/(0?[1-9]|[1][0-2])/([0][1-9]|[1-2][0-9]|[3][0-1])$/";
        //if (nrm.match(data[n][dataKey[0]]) == null) {console.log(data[n][dataKey[0]]); return;}

        let rawData = data[n]; // 1 raw data // rawData[0] = date, rawData[1] = start, rawData[2] = end
        let date = rawData[0].split("/") // date[0] = year, date[1] = month, date[2] = day

        
        start = rawData["start"];
        end = rawData["end"];

        // check if another one be undefined
        if ((!start && end) || (start && !end)) { 
            console.log(`${date[n]} skipped because of the data none.`);
            break;
        }
        
        console.log(`${date[0]},${date[1]},${date[2]},${start},${end}`);
        //cal.create(date[0], date[1], date[2], start, end);
        break;
    }

}