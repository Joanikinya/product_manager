// 1. import all dependencies  
const express = require("express");
const cors = require('cors'); //allow local host 3000 to have access to this page
const app = express();
require('dotenv').config();
require("./configs/mongoose.config");

console.log(process.env.ATLAS_USERNAME);
console.log(process.env.ATLAS_PASSWORD);

// 2. configure express
app.use(cors());
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

console.log("hello world");

// 3. routes & controller logic (CRUD)
const Router = require("./routes/product.routes");
Router(app);


// // 4. listen to the port
app.listen(8002, ()=>console.log(`Listening to the port: 8002`));