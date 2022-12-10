const Calendar = require('node-google-calendar');
const config = require('./calendarConfig.js');
const calId = config.calendarId;


module.exports = {
    
    create:create
}



function create (year, month, day, startTime, endTime) {
  let event = {
    'start': {'dateTime': `${year}-${month}-${day}T${startTime}`, 'timeZone' : 'Asia/Tokyo'},
    'end'  : {'dateTime': `${year}-${month}-${day}T${endTime}`, 'timeZone' : 'Asia/Tokyo'},
    // ------------
    // 終日イベントの場合
    // 'start': {'date': '2019-08-30'},
    // 'end'  : {'date': '2019-08-30'},
    // ------------
    'summary': '思学舎バイト',
    'description': '',
    // カレンダーで表示するイベントの色
    'colorId': 1, 
    // 1:ラベンダ(薄紫)
    // 2:セージ(薄緑)
    // 3:ブドウ(濃紫)
    // 4:フラミンゴ(ピンク)
    // 5:バナナ
    // 6:みかん
    // 7:ピーコック(水色)
    // 8:グラファイト(灰色)
    // 9:ブルーベリー(濃青)
    // 10:バジル(濃緑)
    // 11:トマト
  };

  let cal = new Calendar(config); 

  cal.Events.insert(calId, event)
.then(resp => {
  console.log(resp);
})
.catch(err => {
  console.log(err.message);
});
}