const fs = require("fs");
const http = require("http");
const url = require("url");

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

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const readItems = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname: path } = url.parse(req.url, true);

  if (path === "/items" && query.id !== undefined) {
    res.writeHead(200, { "content-type": "application/json" });
    const item = readItems[query.id];
    if (item) {
      res.end(JSON.stringify(item));
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "Item not found" }));
    }
  } else if (path === "/items") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(readItems));
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page not found</h2>");
  }
});

server.listen(3000, () => {
  console.log("Server started at localhost 3000");
});
