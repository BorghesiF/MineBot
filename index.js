
const mineflayer = require('mineflayer')
const bottest = mineflayer.createBot({
    host: '192.168.1.10',
    port: 25565,
    username: 'Felipe',
})

bottest.on('login', () => {
    ghzin.chat('Oi')
})

bottest.on('chat', (user, message) => {
    console.log(`[${user}] ${message}`)

  
})


