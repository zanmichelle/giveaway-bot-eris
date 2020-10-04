const command = require('../utils/stru/command');

module.exports = class TestCommand extends command {
  constructor() {
    super('test', 'test', ['t'],'This is command description.', '', '');
  }

  async run(client, message, args) {
    const filter = m=> m.author.id == message.author.id

    let responses = await message.channel.awaitMessages(filter, { time: 10000, maxMatches: 1 });
    return console.log(responses)
  }
}



Array.prototype.first = array => {
  if(array[0]) return array[0];
  else throw Error(`Array doesn't have any indexes.`)
}