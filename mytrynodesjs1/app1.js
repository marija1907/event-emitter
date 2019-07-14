var Emitt = require('./emitter1');

var emit = new Emitt();

emit.on('someMessage',function(){
    console.log('From somewhere...Hello!');
});
emit.on('someMessage',function(){
    console.log('This is message!');
});
console.log('Hello');
emit.emit('someMessage');
