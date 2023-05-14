// 1. import all dependencies  
const express = require("express");
const app = express();
require('dotenv').config();
// require("./configs/mongoose.config");

console.log(process.env.ATLAS_USERNAME);
console.log(process.env.ATLAS_PASSWORD);

// // 2. configure express
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

console.log("hello world");


// // 4. listen to the port
app.listen(8002, ()=>console.log(`Listening to the port: 8002`));