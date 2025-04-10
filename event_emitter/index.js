// import modules
const EventEmmiter = require("node:events");

// create an emitter
const emitter = new EventEmmiter();

// add listeners
emitter.on("greet", (name) => {
	console.log(`Hello ${name}`);
});

// emit an event
emitter.emit("greet", "Siphamandla Matshiane");
