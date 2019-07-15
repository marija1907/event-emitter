//var Emitt = require('./emitter1'); when we use file emitter1.js
var Emitt = require('events');//without using emitter1.js file
var emit = new Emitt();

emit.on('someMessage',function(){
    console.log('From somewhere...Hello!');
});
emit.on('someMessage',function(){
    console.log('This is message!');
});
console.log('Hello');
emit.emit('someMessage');
