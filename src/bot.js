const Discord = require('discord.js');

const client = require('./discord/client_singleton.js');
const router = require('./discord_router.js');

client.on('ready', () => {
    console.log("Ready.");
})

client.on('messageCreate', (message) => {
    router.routeText(message)
    .catch( (err) => {
        console.log(err);
    })
});

client.on('error', console.error);
