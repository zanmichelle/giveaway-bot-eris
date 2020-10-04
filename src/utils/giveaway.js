const {db} = require('./database');
const ms = require('ms');
const pretty = require('pretty-ms');
const moment = require('moment');
const register = require('./register');

module.exports = class giveaway {
    constructor(guild_id, message_id, channel_id, author_id, winners=1, reward, guild_req, role_req, start_at, end_at, drop=false){
        this.guild_id = guild_id;
        this.message_id = message_id;
        this.channel_id = channel_id;
        this.author_id = author_id;
        this.winners = isNaN(winners) ? 1 : winners;
        this.reward = reward;
        this.guild_req = guild_req || false;
        this.role_req = role_req || false;
        this.start_at = start_at || Date.now();
        this.end_at = end_at || (Date.now() + 60000);
        this.drop = drop;
    }

    create(){
        return console.log(this)
    }
}