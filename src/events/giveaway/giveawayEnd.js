const event = require('../../utils/stru/event');
const {db} = require('../../utils/database');

module.exports = class giveawayEndEvent extends event {
    constructor(){
        super('giveawayEnd')
    }
    async run(client, giveaway, reroll = false){
        // console.log('giveaway ended);
    }
}