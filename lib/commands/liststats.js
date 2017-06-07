var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "liststats",
  desc: "lets NuTcAsE list some stats",
  fn: (argv, context) => {
    if(context.msg.author.id == '293158895323447307') {
      context.nbot.listStats(context.msg.channel);
      if(argv.args.extended == 'true'){
        context.nbot.listExtraStats(context.msg.channel);
      }
    } else {
      context.nbot.printLongMessage('Only Zupa can use this command.', context.msg.channel);
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
