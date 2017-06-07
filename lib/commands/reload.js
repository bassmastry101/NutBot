var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "reload",
  desc: "reloads bot config and reboots",
  fn: (argv, context) => {
    /** @var {Message} context.msg */
    context.nbot.reloadSpecificConfig(context.msg.guild, context.msg.channel);
  },
  args: [

  ],
  flags: [
   
  ]
});
