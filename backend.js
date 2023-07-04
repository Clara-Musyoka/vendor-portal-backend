const express = require("express");
const getDbConnection = require('./config/db')
const homeRouter = require("./routes/home");
const aboutRouter = require("./routes/about");
const contactRouter = require("./routes/contact");
const productsRouter = require("./routes/products");
const  masokoRouter = require ("./routes/masoko");
const loginRouter = require("./routes/login")
const registerRouter = require("./routes/register")

let app = express(); //creatServer() instance
//To pass any Payload of type Json for POST requests
app.use(express.json());

const db = getDbConnection();
//middlewares
app.use( homeRouter);
app.use( aboutRouter);
app.use( contactRouter);
app.use( masokoRouter);
app.use( productsRouter);
app.use( loginRouter);
app.use( registerRouter);


//open and assign a port
//takes port and call back function
let PORT= null;
//checking if port exists first
if(process.env.PORT){
    PORT= process.env.PORT;
    console.log(`setting default port ${PORT}`);
}else{
    PORT=5500;
    console.log(`setting custom port ${PORT}`)
}
app.listen( PORT, ()=>{
    console.log(`Server is starting on port ${PORT}`);
})