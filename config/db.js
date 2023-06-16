const mongoose = require('mongoose');
let DB_USER = process.env.DB_USER;
let DB_PASS = process.env.DB_PASS;
let DB_NAME = process.env.DB_NAME;
//use string concatination on the db url to hide sensitive information
let db_url = "mongodb+srv://" + DB_USER +":" + DB_PASS + "@cluster0.cyu2fda.mongodb.net/" + DB_NAME;
let options = {
    maxPoolSize: 10,
    family: 4 //connect with IPV4 without trying IPV6
}; //empty object that can be used to dicitate how the connection can happen. eg, you can connect 10 
//conncurrent connections
let setup = ()=>{
mongoose.connect(db_url, options);

let db = mongoose.connection
db.once("open", ()=>{
    console.log("Successful connection to the database");
});
db.on("error", ()=>{
    console.log("Connection to db failed");
});
return db;
}
module.exports = setup;
//export DB_NAME="vendorportal"
//export DB_USER="cmusyoka"
//export DB_PASS="Lolototo__0"
