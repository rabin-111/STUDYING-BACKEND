const fs = require("fs");
const superagent = require("superagent");

/*
fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
     console.log(data);
   superagent
     .get(`https:dog.ceo/api/breed/${data}/images/random`)
     .end((err, res) => {
       if (err) return console.log("error came mitar");

     console.log(res.body.message);
     fs.writeFile(`${__dirname}/dog-image.txt`, res.body.message, (err) => {
       console.log("succesfully written");
     });
   });
 });

// solving using .then( ) and .catch () method of promises

 const fs= require('fs');
 const superagent = require('superagent');
 fs.readFile('./dog.txt','utf-8',(err,data)=>
 {
 superagent
 .get(`https://dog.ceo/api/breed/${data}/images/random`)
 .then(res => {
 console.log(res.body.message)
 fs.appendFile('./dog-image.txt',res.body.message,err=>
 {
   console.log('written bro');
 }
 );
 })
 .catch(err=> {
 console.log(err)
 })
 })
*/

//builidng promises ;

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("oops error in reading");
      resolve(data);
    });
  });
};
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("error in writing file");
      resolve("success");
    });
  });
};
//but problem is chaining of promises
/*
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`breed:${data}`);
    return superagent.get(`https:dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro("./dog-image.txt", res.body.message);
  })
  .then(() => {
    console.log("saved!!");
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*
const getDogPic = async () => {
  try {
    const data = await readFilePro("./dog.txt");
    console.log(data);
    const res = await superagent.get(
      `https:dog.ceo/api/breed/${data}/images/random`,
    );
    console.log(res.body.message);
    await writeFilePro("./dog-image.txt", res.body.message);
    console.log("data written");
  } catch (err) {
    console.log(err);
    throw err;
  }
  return "2returnig value";
};*/

//same code as above but waiting for multiple promises simultaneoulsy

//
const getDogPic = async () => {
  try {
    const data = await readFilePro("./dog.txt");
    console.log(data);
    const res1Pro = superagent.get(
      `https:dog.ceo/api/breed/${data}/images/random`,
    );
    const res2Pro = superagent.get(
      `https:dog.ceo/api/breed/${data}/images/random`,
    );
    const res3Pro = superagent.get(
      `https:dog.ceo/api/breed/${data}/images/random`,
    );
    const all = await Promise.all([res1Pro, res2Pro, res3Pro]); // array banauney all promises
    const imgs = all.map((el) => el.body.message); // and store only the value of body.messages
    console.log(imgs);
    await writeFilePro("./dog-image.txt", imgs.join('\n'));
    console.log("data written");
  } catch (err) {
    console.log(err);
    throw err;
  }
  return "2returnig value";
};

/*console.log("1.here");
getDogPic()
  .then((x) => {
    console.log(x);
    console.log("3: done");
  })
  .catch((err) => console.log(err));
 */
//better way  use of iife

//
(async () => {
  try {
    console.log("1.here");
    const x = await getDogPic();
    console.log(x);
    console.log("3: done");
  } catch (err) {
    console.log("errorrrrrrrrrrrrrrrrrrrrrrr");
  }
})();
