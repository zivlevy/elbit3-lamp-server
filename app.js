const io = require('socket.io')(9000);


let lampData = 0;

io.on('connection', (socket) => {
    console.log('A client connection occurred!');
    socket.emit('lamp', lampData);

    socket.on('lamp', (data) => {
        socket.broadcast.emit('lamp', data);
        lampData = data;
    });
});