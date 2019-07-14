//make constructor function
function Emitt(){
    this.event = {
        properties :[]
    };

}
Emitt.prototype.on = function(message, listener){
    this.event[message] = this.event[message] || [];
    this.event[message].push(listener);
}

Emitt.prototype.emit = function(message){
    if(this.event[message]){
        this.event[message].forEach(function(listener) {
            listener();
        });
    }
}
module.exports = Emitt;