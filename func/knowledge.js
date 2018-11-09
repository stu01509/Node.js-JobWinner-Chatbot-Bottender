const btdc = require('bottender-compose');

module.exports = btdc.random([
  btdc.sendText('1. 不繳錢：不繳交任何不知用途的費用。\n2. 不購買：不購買公司以任何名目要求購買之有形、無形之產品。\n3. 不辦卡：不應求職公司之需求而當場辦理信用卡。\n4. 不簽約：不簽署任何文件、契約。\n5. 不離身：證件及信用卡隨身攜帶，不給求職公司保管。\n6. 不飲用：不飲用酒類及他人提供之不明飲料、食物。\n7. 不非法工作：不從事非法工作或於非法公司工作。', {
    quick_replies: [{
      content_type: 'text',
      title: '更多內容',
      payload: 'moreKnowledge',
    },
    ],
  }),
  btdc.sendText('如訂有書面契約，則契約內容要公平、合理；若契約內有以下條款，將損害自身權益，為避免被騙或詐財，簽約前可先請教親朋好友、長輩或政府勞工行政主管機關後再行簽約：\n\n1. 預扣薪資–即先剋扣若干工資，作為賠償之預備違約金。\n2. 未工作滿多少天不得領薪。\n3. 未服務滿預定期限之處罰。\n4. 預繳工作保證金。\n5. 放棄一切民事賠償條款。\n6. 強迫加班條款或不加班扣錢條款。\n7. 扣押身分證。', {
    quick_replies: [{
      content_type: 'text',
      title: '更多內容',
      payload: 'moreKnowledge',
    },
    ],
  }),
]);
