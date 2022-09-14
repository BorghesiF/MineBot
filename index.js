
const mineflayer = require('mineflayer')
const bottest = mineflayer.createBot({
    host: '###.###.#.##',
    port: 25565,
    username: 'Felipe',
})

bottest.on('login', () => {
    bottest.chat('Hi, Im a test bot')
})

bottest.on('chat', (user, message) => {
    console.log(`[${user}] ${message}`)

  
})


