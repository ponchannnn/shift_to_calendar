const coma = require("./coma.json");
const cal = require("./createEventinCalendar.js");
//const cells = require();

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

        
        //setTimeout(() => console.log(`${date[0]},${date[1]},${date[2]},${min},${max}`), n * 1000);
        setTimeout(() => cal.create(date[0], date[1], date[2],min, max), n * 1000);
        clearTimeout();
    }

    
}

function dataAdjustingFromTime(data) {// from start time n end time
    for (n in data) {
        //let nrm = "/^20\d{2}/(0?[1-9]|[1][0-2])/([0][1-9]|[1-2][0-9]|[3][0-1])$/";
        //if (nrm.match(data[n][dataKey[0]]) == null) {console.log(data[n][dataKey[0]]); return;}

        let rawData = data[n]; // 1 raw data // rawData[0] = date, rawData[1] = start, rawData[2] = end
        let date = rawData["Date"].split("/") // date[0] = year, date[1] = month, date[2] = day

        
        start = rawData["Start"];
        end = rawData["End"];

        // check if another one be undefined
        if ((!start && end) || (start && !end)) { 
            console.log(`${date} skipped because of the data none.`);
            continue;
        }

        if (!start && !end) continue;// if none data, skip
        
        console.log(`${date[0]},${date[1]},${date[2]},${start},${end}`);
        // setTimeout(() => cal.create(date[0], date[1], date[2],min, max), n * 1000);
        // clearTimeout();
    }

}