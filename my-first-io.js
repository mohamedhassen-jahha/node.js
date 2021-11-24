const fs = require("fs");

const fName = process.argv[2];
file = fs.readFileSync(fName);
data = file.toString();
console.log(data.toString().split("\n").length - 1);
