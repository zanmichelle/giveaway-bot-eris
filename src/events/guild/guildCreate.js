const event = require('../../utils/stru/event');
const {db} = require('../../utils/database');

module.exports = class messageReactionAddEvent extends event {
    constructor(){
        super('guildCreate')
    }
    async run(client, guild){
        console.log(guild)
    }
}