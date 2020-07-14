
// Comando para establecer conexión


var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log('Server conectado');

});

socket.on('disconnect', function() {
    console.log('Servidor desconectado');
});

socket.on('estadoActual', function(estadoActual){
    label.text(estadoActual.actual);
});

$('button').on('click', function(){
    socket.emit('siguienteTikect', null, function(siguienteTikect){
        label.text(siguienteTikect);
    });
});