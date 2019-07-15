//var Emitt = require('./emitter1'); when we use file emitter1.js
var Emitt = require('events');//without using emitter1.js file
var configEvents = require('./config').events;//each events I have in application get properties in this object in this file
var emit = new Emitt();

emit.on(configEvents.MESSAGE,function(){
    console.log('From somewhere...Hello!');
});
emit.on(configEvents.MESSAGE,function(){
    console.log('This is message!');
});
console.log('Hello');
emit.emit(configEvents.MESSAGE);
