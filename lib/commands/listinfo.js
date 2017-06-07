var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "listinfo",
  desc: "lets NuTcAsE list some info",
  fn: (argv, context) => {
    if(context.msg.author.id == '293158895323447307') {
      //console.log(argv.args.guildId);
      context.nbot.listInfo(argv.args.guildId, context.msg.channel);
      //context.nbot.listInfo(context.msg.toString().replace('!nbot listinfo ', '').trim(), context.msg.channel);
    } else {
      context.nbot.printLongMessage('Only NuTcAsE can use this command.', context.msg.channel);
    }
  },
  args: [
    {
      name: 'guildId',
      desc: 'guildId',
      type: 'string',
      required: true,
      default: ''
    }
  ],
  flags: [
   
  ]
});


