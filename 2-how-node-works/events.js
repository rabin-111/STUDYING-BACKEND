// const EventEmitter = require("events");
// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }
// const Emitter = new Sales();
// Emitter.on("newSales", () => {
//   console.log("naya sales aayo");
// });

// Emitter.on("newSales", () => {
//   console.log("from naya pasal");
// });

// Emitter.emit("newSales", 9);

// Emitter.on("newSales", stocks=> {
//   console.log(`here is the number of stock ie ${stocks}`);
// });

const http = require("http");
const server = http.createServer();
//
server.on("request", (req, res) => {
  console.log("first reeq");
  res.end("req aayo1");
});

server.on("request", (req, res) => {
  console.log("second reeq");
});

server.on("close", (req, res) => {
  console.log("close gar");
  res.end("close1");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
