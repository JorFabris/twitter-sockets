const express = require('express');
const path = require('path');

//App de express
const app = express();

//Socket server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
//Mensajes de sockets
require('./sockets/socket');


//Path publico
const publicPath = path.resolve( __dirname, 'public' );


app.use( express.static(publicPath) );

server.listen( 3000, (err)=>{
    if(err) throw err;

    console.log(`Servidor corriendo en puerto`, 3000)
});