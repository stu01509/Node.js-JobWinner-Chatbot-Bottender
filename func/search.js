const btdc = require('bottender-compose');

module.exports =

btdc.sendText(
  context =>
  `${context.session.user.first_name} ${
      context.session.user.last_name
    }, XDD.${context.event.text}`
)