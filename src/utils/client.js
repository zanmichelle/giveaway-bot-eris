require('dotenv').config;
const Eris = require('eris');
require('eris-additions')(Eris);
const register = require('./register');

module.exports = class client extends Eris.Client {
    constructor(token,options){
        super(token,options);

        this.commands = new Map();
        this.events = new Map();
        this.prefix = '.';
        this.init();
    }

    async init() {
        console.log(`Registring commands/events`)
        await register.commands(this,'../commands');
        await register.events(this,'../events');
    }


    // LOAD PROTOTYPES

    loadPrototype(path) {

    }
    
}