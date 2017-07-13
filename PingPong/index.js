'use strict';

const Telegram = require('telegram-node-bot'),
     tg = new Telegram.Telegram('386706546:AAHQCRTnNx8t_3bNiaGgxj8vIFbWKojh0js',{
         workers: 1
});

const PingController = require('./controllers/ping')
, OtherwiseController = require('./controllers/otherwise');


tg.router.when(new Telegram.TextCommand('/ping','pingCommand'), new PingController())
   .otherwise(new OtherwiseController());