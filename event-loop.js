const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
////

process.env.UV_THREADPOOL_SIZE = 1; // to set the number of threads in thread pool
setTimeout(() => {
  console.log("timer after 0");
}, 0);
setImmediate(() => {
  console.log("immediate wala");
});

fs.readFile("./test-file.txt", "utf-8", () => {
  console.log("file read");
  ////////
  console.log("---------------");
  ///
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });
  crypto.pbkdf2("password", "salt", 1000000, 1024, "sha512", () => {
    console.log(Date.now() - start, "password encrypted");
  });

  setTimeout(() => {
    console.log("timer after 1");
  }, 0);
  //////
  setTimeout(() => {
    console.log("timer after 2");
  }, 2000);
  /////
  setImmediate(() => {
    console.log("immediate wala");
  });

  ///
  process.nextTick(() => {
    console.log("next tick");
  });
});
console.log("hello from top-level code");
