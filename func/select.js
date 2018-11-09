const btdc = require('bottender-compose');

module.exports = 
btdc.sendText('請選擇 Wanted 或 Dcard 上的工作資訊',{
    quick_replies: [
      {
        content_type: 'text',
        title: 'Wanted',
        payload: 'searchWanted',
      },
      {
        content_type: 'text',
        title: 'Dcard',
        payload: 'searchWanted',
      },
    ],
  });