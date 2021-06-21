const { io } = require('../index.js');
const Twits = require('../models/twits.model.js');

const twits = new Twits();

io.on('connection', client => {
    
    console.log('Cliente conectado');

    client.on('disconnect', () => { 
        console.log('Cliente desconectado');
    });

    client.emit('get-twits', twits.getTwits());

    client.on('save-twit', (twit) => { 
        twits.addTwit(twit);
        io.emit('get-twits',  twits.getBands());
    });

    client.on('delete-twit', (twitId) => { 
        twits.deleteTwit(twitId);
        io.emit('get-twits',  twits.getBands());
    });

});
