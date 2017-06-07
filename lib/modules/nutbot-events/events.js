"use strict";

var NBot    = require('../nutbot-module');

/**
 * Class that contains all Client events.
 */
class NBotEvents {
  /**
   * Constructor function. Gets called when class is made into a object.
   * @param {JSON} options
   * @param {string} token
   */
  constructor(token, options) {

    /**
     * Initiate the NBot the NBot module
     * This object is where all the magic happens and all logic should be written that cannot be put in a separate module.
     * @type {NBot}
     */
    this._nbot = new NBot(options);
    this._options = options;
    this._token = token;

    this._nbot.bot.on('channelCreate', (channel) => { this.onChannelCreate(channel); });
    this._nbot.bot.on('channelDelete', (channel) => { this.onChannelDelete(channel); });
    this._nbot.bot.on('channelPinsUpdate', (channel, date) => { this.onChannelPinsUpdate(channel, date); });
    this._nbot.bot.on('channelUpdate', (oldChannel, newChannel) => { this.onChannelUpdate(oldChannel, newChannel); });
    this._nbot.bot.on('debug', (string) => { this.onDebug(string); });
    this._nbot.bot.on('disconnect', () => { this.onDisconnect(); });
    this._nbot.bot.on('error', (error) => { this.onError(error); });
    this._nbot.bot.on('guildBanAdd', (guild, user) => { this.onGuildBanAdd(guild,user); });
    this._nbot.bot.on('guildBanRemove', (guild, user) => { this.onGuildBanRemove(guild,user); });
    this._nbot.bot.on('guildCreate', (guild) => { this.onGuildCreate(guild); });
    this._nbot.bot.on('guildDelete', (guild) => { this.onGuildDelete(guild); });
    this._nbot.bot.on('guildEmojiCreate', (emoji) => { this.onGuildEmojiCreate(emoji); });
    this._nbot.bot.on('guildEmojiDelete', (emoji) => { this.onGuildEmojiDelete(emoji); });
    this._nbot.bot.on('guildEmojiUpdate', (oldEmoji, newEmoji) => { this.onGuildEmojiUpdate(oldEmoji, newEmoji); });
    this._nbot.bot.on("guildMemberAdd", (member) => {this.onGuildMemberAdd(member)});
    this._nbot.bot.on("guildMemberAvailable", (member) => {this.onGuildMemberAvailable(member)});
    this._nbot.bot.on("guildMemberRemove", (member) => {this.onGuildMemberRemove(member)});
    this._nbot.bot.on("guildMembersChunk", (members) => {this.onGuildMembersChunk(members)});
    this._nbot.bot.on("guildMemberSpeaking", (member, speaking) => {this.onGuildMemberSpeaking(member, speaking)});
    this._nbot.bot.on("guildMemberUpdate", (oldMember, newMember) => {this.onGuildMemberUpdate(oldMember, newMember)});
    this._nbot.bot.on('guildUnavailable', (guild) => {this.onGuildUnavailable(guild);});
    this._nbot.bot.on("guildUpdate", (oldGuild, newGuild) => {this.onGuildUpdate(oldGuild, newGuild)});
    this._nbot.bot.on('message', (message) => {this.onMessage(message);});
    this._nbot.bot.on('messageDelete', (message) => {this.onMessageDelete(message);});
    this._nbot.bot.on('messageDeleteBulk', (messages) => {this.onMessageDeleteBulk(messages);});
    this._nbot.bot.on('messageUpdate', (oldMessage, newMessage) => {this.onMessageUpdate(oldMessage, newMessage);});
    this._nbot.bot.on('presenceUpdate', (oldMember, newMember) => {this.onPresenceUpdate(oldMember, newMember);});
    this._nbot.bot.on("ready", () => {this.onReady()});
    this._nbot.bot.on("reconnecting", () => {this.onReconnecting()});
    this._nbot.bot.on("roleCreate", (role) => {this.onRoleCreate(role)});
    this._nbot.bot.on("roleDelete", (role) => {this.onRoleDelete(role)});
    this._nbot.bot.on("roleUpdate", (oldRole, newRole) => {this.onRoleUpdate(oldRole, newRole)});
    this._nbot.bot.on("typingStart", (channel, user) => {this.onTypingStart(channel, user)});
    this._nbot.bot.on("typingStop", (channel, user) => {this.onTypingStop(channel, user)});
    this._nbot.bot.on("userUpdate", (oldUser, newUser) => {this.onUserUpdate(oldUser, newUser)});
    this._nbot.bot.on("voiceStateUpdate", (oldMember, newMember) => {this.onVoiceStateUpdate(oldMember, newMember)});
    this._nbot.bot.on("warn", (string) => {this.onWarn(string)});

    /**
     * Make the bot sign in to all servers.
     */
    this._nbot.bot.login(token).then(() => {
      console.log('NBot logged in!');
    });

    process.on('uncaughtException', (err) => {
      //fs.writeSync(1, `Caught exception: ${err}`);
      this._nbot.logBot(`Caught exception: ${err}`);
      console.log(`Caught exception: ${err}`);
    });

    process.on('unhandledRejection', (reason, p) => {
      console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
      // application specific logging, throwing an error, or other logic here
      this._nbot.logBot('Unhandled Rejection at: Promise', p, 'reason:', reason);
    });
  }

  /**
   * Gets the Discord bot client
   * @return {NBot}
   */
  get nbot() {
    return this._nbot;
  }

  /**
   * Event when an channel is created.
   * @param {Channel} channel
   */
  onChannelCreate(channel) {

  }

  /**
   * Event when an channel is deleted.
   * @param {Channel} channel
   */
  onChannelDelete(channel) {

  }

  /**
   * Event when an channel has an update regarding pins inside of it.
   * @param {Channel} channel
   * @param {time} date
   */
  onChannelPinsUpdate(channel, date) {

  }

  /**
   * Event when an channel has is updated.
   * @param {Channel} oldChannel
   * @param {Channel} newChannel
   */
  onChannelUpdate(oldChannel, newChannel) {

  }

  /**
   * Event Emitted for general debugging information
   * @param {string} debug
   */
  onDebug(debug) {
    if(! (debug.includes('heartbeat') || debug.includes('Heartbeat') )) {
      console.log(debug);
      this._nbot.logBot(debug);
    }
  }

  /**
   * Event Emitted whenever the client websocket is disconnected
   */
  onDisconnect() {
    console.log('Bot disconnected');
    this._nbot.logBot('Bot disconnected');
  }

  /**
   * Emitted whenever the Client encounters a serious connection error
   * @param {error} error
   */
  onError(error) {
    console.error(error);
    this._nbot.logBot(error.toString());
  }

  /**
   * Event Emitted whenever a member is banned from a guild.
   * @param {guild} guild
   * @param {user} user
   */
  onGuildBanAdd(guild, user) {

  }

  /**
   * Event Emitted whenever a member is unbanned from a guild.
   * @param {guild} guild
   * @param {user} user
   */
  onGuildBanRemove(guild, user) {

  }

  /**
   * Emitted whenever the client (bot) joins a Guild.
   * @param {Guild} guild
   */
  onGuildCreate(guild) {
    this.nbot.newGuildAction(guild);
    this._nbot.logBot('New guild: ' + guild.name);
  }

  /**
   * Emitted whenever a Guild is deleted/left.
   * @param {Guild} guild
   */
  onGuildDelete(guild) {

  }

  /**
   * Emitted whenever an emoji is created
   * @param {Emoji} emoji
   */
  onGuildEmojiCreate(emoji) {

  }

  /**
   * Emitted whenever an emoji is deleted
   * @param {Emoji} emoji
   */
  onGuildEmojiDelete(emoji) {

  }

  /**
   * Emitted whenever an emoji is updated
   * @param {Emoji} oldEmoji
   * @param {Emoji} newEmoji
   */
  onGuildEmojiUpdate(oldEmoji, newEmoji) {

  }

  /**
   * Emitted whenever a user joins a guild.
   * @param {	GuildMember} member
   */
  onGuildMemberAdd(member) {
    this.nbot.welcomeClientAction(member);
  }

  /**
   * Emitted whenever a member becomes available in a large Guild
   * @param {GuildMember} member
   */
  onGuildMemberAvailable(member) {

  }

  /**
   * Emitted whenever a member leaves a guild, or is kicked.
   * @param {GuildMember} member
   */
  onGuildMemberRemove(member) {
    this.nbot.leaveClientAction(member);
  }

  /**
   * Emitted whenever a chunk of Guild members is received (all members come from the same guild)
   * @param {Array<GuildMember>} members
   */
  onGuildMembersChunk(members) {

  }

  /**
   * Emitted once a Guild Member starts/stops speaking
   * @param {GuildMember} member
   * @param {boolean} speaking
   */
  onGuildMemberSpeaking(member, speaking) {

  }

  /**
   * Emitted whenever a Guild Member changes - i.e. new role, removed role, nickname
   * @param {GuildMember} oldMember
   * @param {GuildMember} newMember
   */
  onGuildMemberUpdate(oldMember, newMember) {

  }

  /**
   * Emitted whenever a guild becomes unavailable, likely due to a server outage.
   * @param {Guild} guild
   */
  onGuildUnavailable(guild) {
    console.log('Guild became unavailable: ' + guild.name + ' ( '+ guild.id + ' )');
    this._nbot.logBot('Guild became unavailable: ' + guild.name + ' ( '+ guild.id + ' )');
  }

  /**
   * Emitted whenever a guild is updated - e.g. name change.
   * @param oldGuild
   * @param newGuild
   */
  onGuildUpdate(oldGuild, newGuild) {
    this.nbot.updateGuildAction(oldGuild, newGuild);
  }

  /**
   * Emitted whenever a message is created
   * @param {Message} message
   */
  onMessage(message) {
    this.nbot.checkMessageAction(message);
  }

  /**
   * Emitted whenever a message is deleted
   * @param {Message} message
   */
  onMessageDelete(message) {

  }

  /**
   * Emitted whenever message are deleted in bulk
   * @param {Collection<Message>} messages
   */
  onMessageDeleteBulk(messages) {

  }

  /**
   * Emitted whenever a message is updated - e.g. embed or content change.
   * @param {Message} oldMessage
   * @param {Message} newMessage
   */
  onMessageUpdate(oldMessage, newMessage) {

  }

  /**
   * Emitted whenever a guild member's presence changes, or they change one of their details.
   * @param {GuildMember} oldMember
   * @param {GuildMember} newMember
   */
  onPresenceUpdate(oldMember, newMember) {

  }

  /**
   * Emitted when the Client becomes ready to start working
   */
  onReady() {
    console.log(`Ready to serve in ${this.nbot.bot.channels.size} channels on ${this.nbot.bot.guilds.size} servers, for a total of ${this.nbot.bot.users.size} users.`);
    this.nbot.logBot('Bot ready event');
    this.nbot.logBot(`Ready to serve in ${this.nbot.bot.channels.size} channels on ${this.nbot.bot.guilds.size} servers, for a total of ${this.nbot.bot.users.size} users.`);
    this.nbot.setBotPlayingState(this.nbot.cfg.defaultPlayingStatus);
    this.nbot.initAfterReady();
  }

  /**
   * Emitted when the Client tries to reconnect after being disconnected
   */
  onReconnecting() {
    console.log('Bot disconnected from discord API. Trying to reconnect.');
    this._nbot.logBot('Bot disconnected from discord API. Trying to reconnect.');
  }

  /**
   * Emitted whenever a role is created.
   * @param {Role} role
   */
  onRoleCreate(role) {

  }

  /**
   * Emitted whenever a role is deleted.
   * @param {Role} role
   */
  onRoleDelete(role) {

  }

  /**
   * Emitted whenever a role is deleted.
   * @param {Role} oldRole
   * @param {Role} newRole
   */
  onRoleUpdate(oldRole, newRole) {

  }

  /**
   * Emitted whenever a user starts typing in a channel
   * @param {Channel} channel
   * @param {User} user
   */
  onTypingStart(channel, user) {

  }

  /**
   * Emitted whenever a user stops typing in a channel
   * @param {Channel} channel
   * @param {User} user
   */
  onTypingStop(channel, user) {

  }

  /**
   * Emitted whenever a user's details (e.g. username) are changed.
   * @param {User} oldUser
   * @param {User} newUser
   */
  onUserUpdate(oldUser, newUser) {

  }

  /**
   * Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
   * @param {GuildMember} oldMember
   * @param {GuildMember} newMember
   */
  onVoiceStateUpdate(oldMember, newMember) {

  }

  /**
   * Emitted for general warnings
   * @param {string} warning
   */
  onWarn(warning) {
    console.log(warning);
    this._nbot.logBot(warning);
  }
}

module.exports = NBotEvents;
