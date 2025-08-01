// on CMD, run 
// npm start 

console.log("DB Node Project starting...");

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3030;

http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading file");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



// // import * as fs from "node:fs";
// // import * as http from "node:http";
// // import * as path from "node:path";

// // const PORT = 8000;

// // const MIME_TYPES = {
// //   default: "application/octet-stream",
// //   html: "text/html; charset=UTF-8",
// //   js: "text/javascript",
// //   css: "text/css",
// //   png: "image/png",
// //   jpg: "image/jpeg",
// //   gif: "image/gif",
// //   ico: "image/x-icon",
// //   svg: "image/svg+xml",
// // };

// // const STATIC_PATH = path.join(process.cwd(), "./static");

// // const toBool = [() => true, () => false];

// // const prepareFile = async (url) => {
// //   const paths = [STATIC_PATH, url];
// //   if (url.endsWith("/")) paths.push("index.html");
// //   const filePath = path.join(...paths);
// //   const pathTraversal = !filePath.startsWith(STATIC_PATH);
// //   const exists = await fs.promises.access(filePath).then(...toBool);
// //   const found = !pathTraversal && exists;
// //   const streamPath = found ? filePath : `${STATIC_PATH}/404.html`;
// //   const ext = path.extname(streamPath).substring(1).toLowerCase();
// //   const stream = fs.createReadStream(streamPath);
// //   return { found, ext, stream };
// // };

// // http
// //   .createServer(async (req, res) => {
// //     const file = await prepareFile(req.url);
// //     const statusCode = file.found ? 200 : 404;
// //     const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
// //     res.writeHead(statusCode, { "Content-Type": mimeType });
// //     file.stream.pipe(res);
// //     console.log(`${req.method} ${req.url} ${statusCode}`);
// //   })
// //   .listen(PORT);

// // console.log(`Server running at http://127.0.0.1:${PORT}/`);


// // // // import http from "http";
// // // // import fs from "fs";
// // // // import path from "path";

// // // const http = require("http");
// // // const fs = require("fs");
// // // const path = require("path");
// // // const port = 3030;

// // // // http
// // // //   .createServer(async (req, res) => {
// // // //     const file = await prepareFile(req.url);
// // // //     const statusCode = file.found ? 200 : 404;
// // // //     const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
// // // //     res.writeHead(statusCode, { "Content-Type": mimeType });
// // // //     file.stream.pipe(res);
// // // //     console.log(`${req.method} ${req.url} ${statusCode}`);
// // // //   })
// // // //   .listen(PORT);


// // // http.createServer((request, response) => {
// // //     if (request.url == "/") {
// // //         const filePath
// // //     }
// // // })
// // // .listen(port, () => {
// // //     console.log("Server is running at the port " + port);
// // // });
