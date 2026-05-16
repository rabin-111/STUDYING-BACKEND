const fs = require("fs");
const server = require("http").createServer();
server.on("request", (req, res) => {
  // {///solution 1-- reading all the file at once
  //   fs.readFile('./test-file.txt',(err,data)=>
  // {
  // if(err) {console.log(err)}
  // res.end(data);
  // })

  ////solution2 with streams with one problem of backpressure problem;


//   const readable = fs.createReadStream("./testfile.txt");
//   readable.on("data", (chunk) => {
//     res.write(chunk);
//   });
//   readable.on("end", () => {
//     res.end();
//   });
  


//   readable.on("error",err=>
// {
//   res.statusCode=500;
//   res.end('file not found');
// });
  

///solution 3 using pipe funcction

const readable = fs.createReadStream("./test-file.txt");
readable.pipe(res);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening ");
})
