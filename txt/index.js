const fs = require("fs");

const readFile = fs.readFileSync("./read-this.txt", "utf-8");

const newWrite = `This is new writting to the file: ${readFile}`;

const writeFile = fs.writeFileSync("./output.txt", newWrite);

const outputRead = fs.readFileSync("./output.txt", "utf-8");

console.log(outputRead);
