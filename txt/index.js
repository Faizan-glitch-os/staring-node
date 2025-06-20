const fs = require("fs");
const http = require("http");

// const readFile = fs.readFileSync("./read-this.txt", "utf-8");

// const newWrite = `This is new writting to the file: ${readFile}`;

// s.writeFileSync("./output.txt", newWrite);

// const outputRead = fs.readFileSync("./output.txt", "utf-8");

// console.log(outputRead);

// asyncFileReadAndWrite

// fs.readFile("./start.txt", "utf-8", (error, data1) => {
//   if (error) {
//     return console.log(`Error occured ${error}`);
//   }
//   console.log(data1);

//   fs.readFile(`./${data1}.txt`, "utf-8", (error, data2) => {
//     if (error) {
//       return console.log(`Error occured at second callback ${error}`);
//     }
//     console.log(data2);

//     fs.writeFile("./myFile.txt", "kaka", "utf-8", (error) => {
//       if (error) {
//         return console.log(`Error writting the file ${error}`);
//       }

//       fs.readFile("./myFile.txt", "utf-8", (error, data4) => {
//         console.log(data4);
//       });
//     });
//   });
// });

// console.log("All are async file read and write");

const server = http.createServer((req, res) => {
  res.end("Hello first request");
});

server.listen(3000, () => {
  console.log("Server started at localhost 3000");
});
