const Discord = require('discord.js');
const bot = new Discord.Client();
new Discord.RichEmbed();
const newUsers = new Discord.Collection();
const music = require('discord.js-music');



const config = require("./config.json")

bot.on('ready', () => {
  console.log('Slime is bouncing');
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);



// commands

if (command === "devs") {
    message.channel.send({embed: {
    color: 7506394, 
    author: {
    name: "Bot Builders",
    icon_url: bot.user.avatarURL
},
 fields: [{
        name: "Game Dev",
        value: "<@235868887348936706>",
      },
      
      {
        name: "Bot Dev",
        value: " <@148953784280809474>",
      },
      
            {
        name: "Artist",
        value: "<@306381311923453953>",
      },
      
       {
        name: "Translator(s)",
        value: "<@192334250136043520> <@207294581266579457> <@252675291187642369> <@144752887854137354>",   
      },
      
      
   //   {
   //     name: "other contributers",
   //     value: "",
       ],
    timestamp: new Date(),
    footer: {
      name: "",
      text: "",
    }
  }
});
}
 
//misc commands 

if (command === "help") {
    message.channel.send("A companion for the slime game. Commands: *pet, *feed, *adopt, *attack, *jump, *hug, *transform, *run, *play, *cards");
}

if (command === "pet") {
    message.channel.send("Slime rolls in excitement");
}

if (command === "transform"){
    message.channel.send("https://imgur.com/a/mIQsG")
}

if (command === "cards") {
    message.channel.send("*police *fire *smallslime *yellow *wizard *clone *scribe *rainbow *radioactive");
}


if (command === "feed") {
    message.channel.send("Slime burps!");
}

if (command === "adopt") {
    message.channel.send("You have chosen an amazing slime to be your pet.");
}

if (command === "run"){
    message.channel.send("https://imgur.com/a/cKtJj")
}

if (command === "attack") {
    message.channel.send("Slime Dashes Forward");
}

if (command === "jump") {
    message.channel.send("https://imgur.com/a/JvWyH");
}

if (command === "hug") {
    message.channel.send("Slime Blushes");
}

if (command === "play"){
    message.channel.send("https://kodystonedev.itch.io/slime-ccg");
}

if (command === "say") {
    message.channel.send({embed: {
  color: 7506394,
  description: args.join(" ")
}});
}


//cards 

if (command === "police") {
    message.channel.send("https://imgur.com/iGzA8W2");
}

if (command === "fire") {
    message.channel.send("https://imgur.com/lKs1JdU");
}

if (command === "smallslime") {
    message.channel.send("https://imgur.com/a/Homup");
}

if (command === "yellow") {
    message.channel.send("https://imgur.com/RHaTm5i");
}

if (command === "wizard") {
    message.channel.send("https://imgur.com/ZH5R6jZ");
}
  
  
    
if (command === "clone") {
    message.channel.send("https://imgur.com/UCsFAua");
}    

if (command === "scribe") {
    message.channel.send("https://imgur.com/lCq7KOD");
}    

if (command === "rainbow") {
    message.channel.send("https://imgur.com/5FTo851");
}    

if (command === "radioactive") {
    message.channel.send("https://imgur.com/mnszIAr");
}  

//admin
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please @ a member of the server!");
    if(!member.kickable) 
      return message.reply("Unable to kick, Check Roles and Permissions");
    
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please Give A Reason");
    
     member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }


 
});

bot.login(config.token);



