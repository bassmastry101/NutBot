var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "disconnect",
  desc: "lets NuTcAsE simulate a disconnect",
  fn: (argv, context) => {
    if(context.msg.author.id == '293158895323447307') {
      context.nbot.bot.emit('disconnect');
    }
  },
  args: [
    {
      name: 'extended',
      desc: 'extended',
      type: 'string',
      required: false,
      default: ''
    }
  ],
  flags: [
   
  ]
});
