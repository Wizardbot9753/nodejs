import EventEmitter from 'events'

// creating class 

class MyEmitter extends EventEmitter{ }

// creating object 

const myEmitterObject = new MyEmitter(); 

//example one

// register event listener

myEmitterObject.once('event',  () => {
    let m = 0;
    console.log(++m);
})

// with "on" function it changes the value everytime it trigger the function
// if you dont want to change the value and event listner tiggers only one time then use "once" function

// "emit" function is used to trigger the event 

myEmitterObject.emit('event');
myEmitterObject.emit('event');

