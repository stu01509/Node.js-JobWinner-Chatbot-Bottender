const btdc = require('bottender-compose');

module.exports = btdc.series([
  btdc.sendText('以下相關的新聞案例'),
  btdc.sendGenericTemplate(
    [
      {
        title: '求職防詐騙實務經驗',
        image_url: 'http://www.twpowernews.com/uploadfile/201811/f8b56d20432fb0a608ab27e5281ce7dd.jpg',
        subtitle: '南臺科大邀研究生警官楊士偉傳授求職防詐騙實務經驗',
        buttons: [
          {
            type: 'web_url',
            title: '查看',
            url: 'https://times.hinet.net/news/22065204',
            webview_height_ratio: 'full',
          },
        ],
      },
      {
        title: '求職防騙',
        image_url: 'https://s.yimg.com/ny/api/res/1.2/PzmLcBl8hZ9m39zloqYzqg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/zh-Hant-TW/homerun/nownews.com/f8de726477a495c6827f99bedf77b459',
        subtitle: '求職防騙「三備七不原則」校園宣導',
        buttons: [
          {
            type: 'web_url',
            title: '查看',
            url: 'https://tw.news.yahoo.com/%E6%B1%82%E8%81%B7%E9%98%B2%E9%A8%99-%E4%B8%89%E5%82%99%E4%B8%83%E4%B8%8D%E5%8E%9F%E5%89%87-%E6%A0%A1%E5%9C%92%E5%AE%A3%E5%B0%8E-122536004.html',
            webview_height_ratio: 'full',
          },
        ],
      },
      {
        title: '求職防詐騙',
        image_url: 'https://img.appledaily.com.tw/images/ReNews/20181013/640_6a7742ef137f921253044bacb463e6e1.jpg',
        subtitle: '嫩女交雙證件求職　下場好慘！賠錢又吃官司',
        buttons: [
          {
            type: 'web_url',
            title: '立即體驗',
            url: 'https://tw.appledaily.com/new/realtime/20181013/1446269/',
            webview_height_ratio: 'full',
          },
        ],
      },
    ],
    { image_aspect_ratio: 'horizontal' },
  ),
]);
