const Discord = require('discord.js');

const client = require('./discord/client_singleton.js');
const router = require('./discord_router.js');

client.on('ready', () => {
    console.log("Ready.");
    client.user.setStatus(`invisible`);
})

client.on('message', (message) => {
    router.routeText(message)
    .catch( (err) => {
        console.log(err);
    })
});
