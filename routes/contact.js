const express = require("express");
const contactRouter = express.Router();

contactRouter.get("/contact", function(req, res){
  //logic
});

contactRouter.post("/contact", function(req, res){
  //logic
});

  module.exports = contactRouter;