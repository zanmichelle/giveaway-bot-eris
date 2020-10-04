const event = require('../../utils/stru/event');
const {db} = require('../../utils/database');

module.exports = class messageReactionAddEvent extends event {
    constructor(){
        super('messageReactionAdd')
    }
    async run(client, message, emoji, userID){
        console.log(emoji,userID,'\n\n', message)
    }
}