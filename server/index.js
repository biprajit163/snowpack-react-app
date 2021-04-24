const express = require('express');
const app = express();
const http = require('http').createServer();
// const server = http.createServer(app);


const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`);
    });
});


http.listen(8080, () => console.log(`listening on http://localhost:8080`));


/* ------------------------------------------------------------------------------- */

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + './index.html');
// });

// server.listen(3000, () => {
//     console.log('listening on *:3000');
// });
