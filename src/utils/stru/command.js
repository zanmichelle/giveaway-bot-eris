module.exports = class command {
    constructor(name, category=null, aliases=[], description, userperm, clientperm){
        this.name = name;
        this.category = category;
        this.aliases = aliases;
        this.description = description;
        this.userperm = userperm;
        this.clientperm = clientperm;
    }
}