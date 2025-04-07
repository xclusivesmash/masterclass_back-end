const path = require("path");

// get directory name
const dirName = path.dirname(__filename);
console.log("directory name:", dirName);
// get filename
const filename = path.basename(__filename);
console.log("filename:", filename);
// get file extension
const fileExtension = path.extname(__filename);
console.log("filename extension:", fileExtension);
// get joined path
const joinedPath = path.join("back-end", "API", "node", "projects");
console.log(joinedPath);
