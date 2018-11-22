const btdc = require('bottender-compose');

function checkTime() {
  const nowHr = new Date().getHours();
  let nowHrState = '';
  if (nowHr <= 5) {
    nowHrState = '凌晨囉! 辛苦你惹~';
  } else if (nowHr <= 10) {
    nowHrState = '早安!';
  } else if (nowHr <= 13) {
    nowHrState = '午安!';
  } else if (nowHr <= 18) {
    nowHrState = '下午囉!';
  } else if (nowHr <= 24) {
    nowHrState = '晚安~ ';
  }
  return nowHrState;
}

module.exports = btdc.series([
  btdc.sendText(() => `${checkTime()} 歡迎使用 求職溫拿🎉`),
  btdc.sendText('提供求職上各種的工作資訊，還有簡單的性向小測驗，讓你快速了解你自己.'),
  btdc.sendButtonTemplate(
    '需要什麼服務呢？',
    [{
      type: 'postback',
      title: '找工作',
      payload: 'searchAll',
    },
    {
      type: 'postback',
      title: '星座測驗',
      payload: 'constellation',
    },
    {
      type: 'postback',
      title: '性向測驗',
      payload: 'test',
    },
    ],
  ),
]);
