const fs = require('fs');

const Here = fs.readFileSync('./final/txt/input.txt' );
 console.log(Here);
const wr =`HERa maile janeko yeti ho ${Here}.\n lekheko yo date ma ${Date.now()}`;
fs.writeFileSync('./txt/output.txt' , wr);