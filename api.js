

var iconv = require('iconv-lite');
var request = require('request');
request({
    url: 'https://tw.wanted.jobs/api/v3/search?query=%E5%89%8D%E7%AB%AF',

}, function(err, response, body) {
    // let decode = iconv.decode(JSON.stringify(body), 'utf8');
    // console.log(decode);
    let i = 0;
    if(body.includes('title_thumb_img')){
      i++;
    }
    console.log(i)
});


// buf = iconv.decode("Sample input string", 'utf-8');

// console.log(buf);
