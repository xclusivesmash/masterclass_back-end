const lodash = require('lodash');

const names = ["mandy", "john", "mia", "terry", "siphamandla"];
const capitalized = lodash.map(names, lodash.capitalize);
console.log(capitalized);
