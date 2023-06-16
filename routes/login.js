const express = require("express");
const loginRouter = express.Router();
//const Vendor = require("../models/vendor");

loginRouter.post("/login", function(req, res){
  //logic 

  //to save into db, we shall use the Vendor model after importing it 
  // g Vendor.save();
});

  module.exports = loginRouter;