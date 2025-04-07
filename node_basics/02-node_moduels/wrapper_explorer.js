console.log("wrapper demonstration");
console.log("__filename in wrapper explorer: ", __filename);
console.log("__dirname in wrapperr explorer: ", __dirname);

module.exports.greet = function(name) {
	console.log(`Hey there ${name}`);
};
