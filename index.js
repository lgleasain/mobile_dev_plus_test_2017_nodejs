var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'SPh7HcVmBweIWBmcCHfSUzYx2',
    consumer_secret: 'kYIbol0yMtZ8CXbaaou73ehDTAY3ZVDyu7hXiAIv6hQOIcc8nF',
    access_token_key: '857291695838216192-BkfXIXNFKmr5MUnpi2R6eQyVBVdL5jM',
    access_token_secret: '5TzTaaLnvOZPY7MuSeShGN1Se4mfpd2CFzRGGIc7SAwC9'
});

var client1 = new Twitter({
    consumer_key: 'FlvAZWdpiBppyeKQgmnHTcDKl',
    consumer_secret: '6u4g7k4EyN4qvhz5iO2zTK8tswvXGr7ESrtJkPZ0u03foRRkEo',
    access_token_key: '857296382100619264-KJNASEgzWYE5flrqLjmXeScsYmchDOn',
    access_token_secret: 'kuaD1kfxFMlKZqffvWV6FkA6EcQxjLrblxGUTSnCL3BKL'
});



app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
});

http.listen(PORT, function(){
    console.log('listening on *:3000');
});

/* code to listen on Twitter */
 function getLetter(letter){
     if(letter === 'r'){
         structure = {0:true,
                      1:true,
                      2:true,
                      3:false,
                      4:true,
                      5:true,
                      6:false,
                      7:true,
                      8:true,
                      9:false,
                      10:true,
                      11:false,
                      12:true,
                      13:true,
                      14:true,
                      15:true
         }
     }
     if(letter === 't'){
         structure = {0:true,
                      1:false,
                      2:false,
                      3:false,
                      4:false,
                      5:false,
                      6:false,
                      7:true,
                      8:true,
                      9:true,
                      10:true,
                      11:true,
                      12:false,
                      13:false,
                      14:false,
                      15:true
         }
     }
     if(letter === 'e'){
         structure = {0:true,
                      1:false,
                      2:false,
                      3:true,
                      4:true,
                      5:false,
                      6:true,
                      7:true,
                      8:true,
                      9:true,
                      10:false,
                      11:true,
                      12:true,
                      13:true,
                      14:true,
                      15:true
         }
     }
     if(letter === 's'){
         structure = {0:true,
                      1:false,
                      2:true,
                      3:true,
                      4:true,
                      5:true,
                      6:false,
                      7:true,
                      8:true,
                      9:false,
                      10:true,
                      11:true,
                      12:false,
                      13:true,
                      14:true,
                      15:true
         }
     }
     if(letter === 'm'){
         structure = {0:true,
                      1:true,
                      2:true,
                      3:true,
                      4:false,
                      5:false,
                      6:true,
                      7:true,
                      8:true,
                      9:false,
                      10:false,
                      11:false,
                      12:true,
                      13:true,
                      14:true,
                      15:true
         }
     }
     if(letter === 'o'){
         structure = {0:true,
                      1:true,
                      2:true,
                      3:true,
                      4:true,
                      5:false,
                      6:false,
                      7:true,
                      8:true,
                      9:false,
                      10:false,
                      11:true,
                      12:true,
                      13:true,
                      14:true,
                      15:true
         }
     }
     if(letter === 'w'){
         structure = {0:true,
                      1:true,
                      2:true,
                      3:true,
                      4:true,
                      5:true,
                      6:false,
                      7:false,
                      8:false,
                      9:false,
                      10:false,
                      11:true,
                      12:true,
                      13:true,
                      14:true,
                      15:true
         }
     }
     if(letter === '!'){
         structure = {0:false,
                      1:false,
                      2:false,
                      3:false,
                      4:true,
                      5:false,
                      6:true,
                      7:true,
                      8:false,
                      9:false,
                      10:false,
                      11:false,
                      12:false,
                      13:false,
                      14:false,
                      15:false
         }
     }
     if(letter === 'i'){
         structure = {0:false,
                      1:false,
                      2:false,
                      3:false,
                      4:true,
                      5:true,
                      6:true,
                      7:true,
                      8:false,
                      9:false,
                      10:false,
                      11:false,
                      12:false,
                      13:false,
                      14:false,
                      15:false
                     }
     }

     return structure
 }

 function returnFullArray(letter, foreground, background){
     structure = getLetter(letter);
     fullArray = {}
     for(i = 0; i < 16; i = i + 1){
         if(structure[i]){
             fullArray[i] = foreground
         }else{
             fullArray[i] = background
         }
     }
     return fullArray
 }

var test2Stream = client.stream('statuses/filter', {track: 'mobiledevtest2'});
test2Stream.on('data', function(event) {
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('m', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 1000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('e', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 2000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('o', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 3000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('w', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 4000);

    console.log(event && event.text);
});

test2Stream.on('error', function(error) {
    throw error;
});

var iot = client.stream('statuses/filter', {track: 'mobileiotcon'});
iot.on('data', function(event) {
    setTimeout(function(){
        io.emit('chat message',
                    returnFullArray('i', { 'r': 20, 'g': 130, 'b': 0},
                                    { 'r': 0, 'g': 0, 'b': 0})
                   );
    }, 1000);
    setTimeout(function(){
        io.emit('chat message',
                    returnFullArray('o', { 'r': 20, 'g': 130, 'b': 0},
                                    { 'r': 0, 'g': 0, 'b': 0})
                   );
    }, 2000);
    setTimeout(function(){
        io.emit('chat message',
                    returnFullArray('t', { 'r': 20, 'g': 130, 'b': 0},
                                    { 'r': 0, 'g': 0, 'b': 0})
                   );
    }, 3000);

    console.log(event && event.text);
});

iot.on('error', function(error) {
    throw error;
});

var purr = client1.stream('statuses/filter', {track: 'purrprogramming'});
purr.on('data', function(event) {
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('m', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 1000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('e', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 2000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('o', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 3000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('w', { 'r': 90, 'g': 50, 'b': 0},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 4000);

    console.log(event && event.text);
});

purr.on('error', function(error) {
    throw error;
});

var me = client1.stream('statuses/filter', {track: 'lgleasain'});
me.on('data', function(event) {
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('m', { 'r': 90, 'g': 25, 'b': 25},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 1000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('e', { 'r': 90, 'g': 25, 'b': 25},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 2000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('!', { 'r': 90, 'g': 25, 'b': 25},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 3000);
    setTimeout(function(){
        io.emit('chat message',
                returnFullArray('!', { 'r': 90, 'g': 25, 'b': 25},
                                { 'r': 0, 'g': 0, 'b': 0})
               );
    }, 4000);

    console.log(event && event.text);
});

me.on('error', function(error) {
    throw error;
});
