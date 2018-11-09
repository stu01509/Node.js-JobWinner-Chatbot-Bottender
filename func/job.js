const btdc = require('bottender-compose');

module.exports = btdc.series([
  btdc.sendText('以下幾個求職平台給你參考'), 
  btdc.sendGenericTemplate(
    [
      {
        title: 'Wanted',
        image_url: 'https://static.wanted.co.kr/images/facebook_image_final_tw.png',
        subtitle: '輕鬆三步驟，讓你的職涯起飛',
        buttons: [
          {
            type: 'web_url',
            title: '立即前往',
            url: 'https://tw.wanted.jobs',
            webview_height_ratio: 'full',
          },
          {
            type: 'web_url',
            title: '立即搜尋',
            url: 'https://tw.wanted.jobs/wdlist',
            webview_height_ratio: 'full',
          },
        ],
      },
      {
        title: 'mit.jobs',
        image_url: 'https://mit.jobs/assets/meta-image-a9eba4975b1c52a87102475a17d2fc7cdc5b7d247bcaad6d6de687a658da9af3.jpg',
        subtitle: '讓全世界一起幫你找工作！',
        buttons: [
          {
            type: 'web_url',
            title: '立即前往',
            url: 'https://mit.jobs/?locale=zh-TW',
            webview_height_ratio: 'full',
          },
        ],
      },
      {
        title: 'CakeResume',
        image_url: 'https://assets.cakeresume.com/assets/cakeresume_og_image@2x-fe4eb0587a985d683cb4cdd6a68a747188535b553ab77e24c8466e101bc56869.png',
        subtitle: 'Making Your Resume a Piece of Cake',
        buttons: [
          {
            type: 'web_url',
            title: '立即前往',
            url: 'https://www.cakeresume.com/',
            webview_height_ratio: 'full',
          },
          {
            type: 'web_url',
            title: '立即搜尋',
            url: 'https://www.cakeresume.com/jobs?ref=navs_jobs',
            webview_height_ratio: 'full',
          },
        ],
      },
      {
        title: '104人力銀行',
        image_url: 'https://www.104.com.tw/jobs/main/static/img/fb_600x315.png',
        buttons: [
          {
            type: 'web_url',
            title: '立即前往',
            url: 'https://www.104.com.tw/jobs/main/',
            webview_height_ratio: 'full',
          }
        ],
      },
      {
        title: '1111人力銀行',
        image_url: 'https://www.1111.com.tw/talents/MicroBlogging/images/facebook_banner01.jpg',
        buttons: [
          {
            type: 'web_url',
            title: '立即前往',
            url: 'https://www.1111.com.tw/',
            webview_height_ratio: 'full',
          }
        ],
      },
    ],
    { image_aspect_ratio: 'horizontal' }
  ),
]);