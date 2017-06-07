var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "broadcast",
  desc: "lets nutcase broadcast",
  fn: (argv, context) => {
    if(context.msg.author.id == '293158895323447307') {
      context.nbot.broadcastMessage(context.msg.content.toString());
    } else {
      context.nbot.printLongMessage('Only NuTcAsE can use this command.', context.msg.channel);
    }
  },
  args: [

  ],
  flags: [
   
  ]
});
