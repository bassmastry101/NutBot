'use strict';

/**
 * Load all external dependencies TODO: Move these to the files that need them instead of passing them as properties ( DIRTY ).
 */
const Discord = require('discord.js');
const query = require('game-server-query');
const qs = require("querystring");
const request = require("request");
const bluebird = require("bluebird");
const redisNode = require("redis");
const lodash = require('lodash');


/**
 * Load all internal dependencies
 */
const Clapp   = require('./modules/clapp-discord');
const NBotEvents    = require('./modules/nutbot-events');
const NBotBERcon    = require('./modules/nutbot-be-rcon');
const NBotTelnet    = require('./modules/nutbot-telnet');
const NBotRedis    = require('./modules/nutbot-redis');
const cfg     = require('../config.js');
const defaultConfig  = require('../defaults.js');
const pkg     = require('../package.json');

/**
 * Create bot instance.
 */
let bot     = new Discord.Client({ autoReconnect: true });

/**
 * Make the redis functions async.
 */
bluebird.promisifyAll(redisNode.RedisClient.prototype);
bluebird.promisifyAll(redisNode.Multi.prototype);

/**
 * Initiate Clapp module
 * This module is an clean and easy implementation for replying to ! commmands.
 * @type {App}
 */
let clapp = new Clapp.App({
  name: cfg.name,
  desc: pkg.description,
  prefix: cfg.prefix,
  version: pkg.version,
  onReply: (msg, context) => {
    context.msg.reply('\n' + msg).then(bot_response => {
      if (cfg.deleteAfterReply.enabled) {
        context.msg.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
        bot_response.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
      }
    });
  }
});

/**
 * Create a rediswrapper instance object.
 * @type {NBotRedis}
 */
let redis = new NBotRedis(redisNode, bluebird);

/**s
 * Initiate the NBotEvents of the ZBot module
 * This will be your medium between Discord Events and ZBot.
 * @type {NBotEvents}
 */
const events = new NBotEvents(cfg.token, {
  bot: bot,
  cfg: cfg,
  clapp: clapp,
  query: query,
  qs: qs,
  request: request,
  bercon: NBotBERcon,
  redis: redis,
  defaultConfig: defaultConfig
});
