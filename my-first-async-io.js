const fs = require("fs");

const fName = process.argv[2];
file = fs.readFile(fName, function (err, data) {
  console.log(data.toString().split("\n").length - 1);
});
