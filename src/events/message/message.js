const event = require('../../utils/stru/event');
const {db} = require('../../utils/database');

module.exports = class messageEvent extends event {
    constructor(){
        super('messageCreate')
    }
    async run(client, message){
        try{
            if(message.author.bot == true) return;
            if(!message.channel.guild) return
            if (!message.content.startsWith(client.prefix)) return
            const [cmdName, ...cmdArgs] = message.content
            .slice(client.prefix.length)
            .trim()
            .split(/\s+/);
            const command = client.commands.get(cmdName);
            // Run the command.
            if (command) {
                try {
                    command.run(client, message, cmdArgs);
                } catch (error) {
                    console.log(`[ERROR] - Message Event, while executing command: ${command.name}\n`,error.stack);
                }
            } 
        }catch(err){console.error(`[CRITICAL ERROR] - at MESSAGE event.\n`,err.stack)} 
    }
}