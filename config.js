module.exports = {

  // Your bot name. Typically, this is your bot's username without the discriminator.
  // i.e: if your bot's username is MemeBot#0420, then this option would be MemeBot.
  name: "7DTD-Admin",

  version: "1.0.0",

  // The bot's command prefix. The bot will recognize as command any message that begins with it.
  // i.e: "` foo" will trigger the command "foo",
  //      whereas "Z-Bot foo" will do nothing at all.
  prefix: "!7d",

  // Your bot's user token. If you don't know what that is, go here:
  // https://discordapp.com/developers/applications/me
  // Then create a new application and grab your token.

  // token: "production-key", // Production token (NBot)
  token: "YOUR_TOKEN_HERE", // Test token (N-Bot (Dev))

  // Key to get youtube songs.
  youtube_data_key: "AIzaSyDRaPYpfRZlp_lGk5Myj5euc_y-7C1iI1s", // not supported in this version of the bot.

  encryptionKey: 'a-unique-string',

  defaultPlayingStatus: '7 Days to Die - Admin',

  giphy: {
    api_key: "dc6zaTOxFJmzC",
    rating: "r",
    url: "http://api.giphy.com/v1/gifs/random",
    permission: ["NORMAL"],
    format: "json",
    limit: 1
  },

  // If this option is enabled, the bot will delete the message that triggered it, and its own
  // response, after the specified amount of time has passed.
  // Enable this if you don't want your channel to be flooded with bot messages.
  // ATTENTION! In order for this to work, you need to give your bot the following permission:
  // MANAGE_MESSAGES - 	0x00002000
  // More info: https://discordapp.com/developers/docs/topics/permissions
  deleteAfterReply: {
    enabled: false,
    time: 10000 // In milliseconds
  },

  log: {
    enable: true,
    channel: 'admin-log'
  },

  rconReconnect: 30000, // miliseconds to keep connecting to a server before giving up.

  specificLoaded: true, // keep it false.

  useRedis: true, // to use redis. Redis will override the 'specific' config ( From the webpanel ). If you use this script localy, redis is not supported.

  specific: {
    "guildId": "",
    "channels": {
      "7Days": "293160176041852928",
      "test_7days": "315856705713864704"
    },
    "bercon": {
      "enabled": true,
      "colors": true,
      "permissions": {
        "players": "Scrubs",
        "admins": "Admins",
        "bans": "Admins",
        "loadScripts": "Admins",
        "loadEvents": "Admins",
        "say": "Admins",
        "missions": "Admins",
        "version": "Scrubs",
        "update": "Admins",
        "loadBans": "Admins",
        "writeBans": "Admins",
        "removeBan": "Admins",
        "ban": "Admins",
        "addBan": "Admins",
        "MaxPing": "Admins",
        "kick": "Admins",
        "disconnect": "Admins",
        "exit": "Admins",
        "serverCommands": "Admins"
      },
      "sharedActions": [
        {
          "command": "!test",
          "reply": "testing2",
          "discordReply": "Test",
          "role": "Admins"
        }
      ],
      "servers": [
        {
          "id": 0,
          "name": "Smashin Goblin Dicks",
          "ip": "127.0.0.1",
          "port": "18081",
          "rconPassword": "PASSWORD",
          "channels": {
            "side": "test_7days",
            "direct": "test_7days",
            "vehicle": "test_7days",
            "group": "test_7days",
            "admin": "test_7days",
            "default": "test_7days",
            "commands": "test_7days",
            "joins": "test_7days",
            "global": "test_7days"
          },
          "showChannels": {
            "side": false,
            "direct": true,
            "vehicle": true,
            "group": true,
            "admin": true,
            "default": true,
            "commands": true,
            "joins": true,
            "global": true
          },
          "actions": [
            {
              "command": "!test",
              "reply": "testing",
              "discordReply": "@Admins yolo",
              "role": ""
            }
          ],
          "jobs": [
            {
              "time": "",
              "text": ""
            }
          ]
        },
        {
          "id": 1,
          "name": "Zupa Exile",
          "ip": "127.0.0.1",
          "port": "3307",
          "rconPassword": "password",
          "channels": {
            "side": "rcon_test_2",
            "direct": "rcon_test_2",
            "vehicle": "rcon_test_2",
            "group": "rcon_test_2",
            "admin": "rcon_test_2",
            "default": "rcon_test_2",
            "commands": "rcon_test_2",
            "joins": "rcon_test_2",
            "global": "rcon_test_2"
          },
          "showChannels": {
            "side": true,
            "direct": true,
            "vehicle": true,
            "group": true,
            "admin": true,
            "default": true,
            "commands": true,
            "joins": true,
            "global": true
          },
          "actions": [
            {
              "command": "",
              "reply": "",
              "discordReply": "",
              "role": ""
            }
          ],
          "jobs": [
            {
              "time": "",
              "text": ""
            }
          ]
        }
      ]
    }
  }
};
