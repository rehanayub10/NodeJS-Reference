//Event Driven Programming
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1+num2);
});

eventEmitter.emit('tutorial',1,2);

//extending using Event Emitter
class Person extends EventEmitter{
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let max = new Person('Max');
let christina = new Person('Christina');
max.on('name', () => {
    console.log('My name is ' + max.name);
});
christina.on('name', () => {
    console.log('My name is ' + christina.name);
});

christina.emit('name');
max.emit('name');

//Executed in the order they're emitted 
//=== synchronously