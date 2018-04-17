const discord = require ("discord.js");

var client = new discord.Client();

const token = "NDM0Njc5MTg1NjYzODUyNTQ0.DbN-cw.2fuysj6vV8OzRvJQG9-ALFwUEQ4";

client.on("ready", () => {
    console.log("Pregatit!")
    client.user.setPresence({ game: { name: '!help | 1 server, pentru ca voi fi doar in acest server ;)', type: 3 } });
});

const prefix = "!"
client.on("message", (message) => {

    if (message.author.bot) return;

    if (message.content.startsWith (prefix + "salut")) {
        message.reply("Salutare :smiley:");
    }

    if (message.content.startsWith (prefix + "👀")) {
        message.channel.sendMessage(":eyes:")
    }

    if (message.content.startsWith (prefix + "mew")) {
        message.channel.send ("Awww! Este foarte adorabil! :heart_eyes:", {files: ["./images/mew.png"]})
    }

    mention = message.mentions.users.first();

    if(message.content.startsWith (prefix + "dm")) {
       if (mention == null) { return; }
       message.delete();
       mentionMessage = message.content.slice (8);
       mention.sendMessage (mentionMessage);
       message.channel.send ("Mesajul a fost trimis! :smile:");
    }

});

client.login (token);
