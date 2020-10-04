const command = require('../../utils/stru/command');
const Giveaway = require('../../utils/giveaway');


module.exports = class CreateCommand extends command {
  constructor() {
    super('create', 'giveaways', [],'Create the giveaway.', '', '');
  }

  async run(client, message, args) {
      try {

        let reward = await getReward(message);
        console.log(reward)
            const giveaway = new Giveaway(
                message.channel.guild.id,
                message.id,
                message.channel.id,
                message.author.id,
                1,
                'test',
                false,
                true,
                Date.now(),
                Date.now() + 60000
            );
            giveaway.create()
        } catch (error) {
          console.log(`ERROR at ${this.name} - [${this.category}]\n\n`,error.stack,`\nEnd of error.`);
      }
  }
}

function getContent(message,data,channel=false,time=false) {
    new Promise(async(resolve,reject)=>{
        const channelreg = /^(<#\d{18}>)$/g
        const timereg = /^(\d{1,3}[s|m|h|d])$/g
        let response = await message.channel.awaitMessages(m=> m.author.id === message.author.id, {time: 30000, maxMatches: 1});
        if(!response) reject(`Timed out`);
        if(channel) {
            if(message.content.match(channelreg)) resolve(message.content.match(channelreg)[0])
        }
        else if(time) {

        }
        else {
            resolve(message.content);
        }
    });
}