// import modules
const EventEmitter = require("node:events");
const {setHeapSnapshotNearHeapLimit} = require("node:v8");

class myEvents extends EventEmitter {
	constructor() {
		super();
		this.greetMSG = "Hello";
		this.saluteMSG = "Bye";
	}
	greetings(name) {
		this.emit("greetings", name);
	}
	salutations(name) {
		this.emit("salutations", name);
	}
}

const newEvent = myEvents();
// greetings
newEvent.on("greetings", (name) => {
	console.log(`${this.greetMSG} ${name}`);
});
newEvent.greetings("Siphamandla");

// salutations
const newEvent2 = myEvents();
newEvent2.on("saluations", (name) => {
	console.log(`${this.saluteMSG} ${name}`);
});
newEvent2.salutations("Siphamandla");
