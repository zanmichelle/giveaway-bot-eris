const event = require('../utils/stru/event');
const {db} = require('../utils/database');

module.exports = class readyEvent extends event {
    constructor(){
        super('ready')
    }
    async run(client){
        console.log('client is ready')
    }
}