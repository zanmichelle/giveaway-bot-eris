const giveawayClient = require('./utils/client');
const client = new giveawayClient('NzQ1NTgwNjgzMzMzNzMwMzg2.Xzz2Hw.9v_6qnNs4V7V4H9EbTArGZTUvHA');
client.connect();

const Base = require('eris-sharder').Base;
module.exports = class Class extends Base {
    constructor(bot){
        super(bot)
    }
    
    launch() {
        
    }
}