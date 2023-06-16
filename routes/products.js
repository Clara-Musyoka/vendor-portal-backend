const express = require("express");
const productsRouter = express.Router();

productsRouter.get("/product", function(req, res){
    //logic
  });

  productsRouter.post("/product/category", function(req, res){
    //logic
  });

module.exports = productsRouter;