
const path = require('path');
const fs = require('fs').promises;
const command = require('./stru/command');
const event = require('./stru/event');

async function commands(client, dir = '') {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) commands(client, path.join(dir, file));
    if (file.endsWith('.js')) {
      const Command = require(path.join(filePath, file));
      if (Command.prototype instanceof command) {
        const cmd = new Command();
        client.commands.set(cmd.name, cmd);
        await cmd.aliases.forEach((alias) => {
          client.commands.set(alias, cmd);
        });
      }
    }
  }
}

async function events(client, dir = '') {
  const filePath = path.join(__dirname, dir);
  const files = await fs.readdir(filePath);
  for (const file of files) {
    const stat = await fs.lstat(path.join(filePath, file));
    if (stat.isDirectory()) events(client, path.join(dir, file));
    if (file.endsWith('.js')) {
      const Event = require(path.join(filePath, file));
      if (Event.prototype instanceof event) {
        const e = new Event();
        client.events.set(e.name, e);
        client.on(e.name, e.run.bind(e, client));
      }
    }
  }
}

module.exports = { 
  commands, 
  events,
};