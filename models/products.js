// structure of data to be stored. Used to have a defined scheme of how product details will be stored.

let mongoose = require('mongoose');
//structure
let product = {
    Name: { type: String, required: true}, 
    Model: { type: String, required: true},
    Description: { type: String, required: true},
    Price: { type: Number, required: true},
    Qquantity: { type: Number, required: true}, //you can also have a default value
    created_date: { type: Date, default: Date.now()}
    
}
//schema
let product_schema = new mongoose.Schema(product); //pass the product object you created above

//model
let Product = mongoose.model("Product", product_schema); //name of your model translates to your collection in lower case but in plural
// Product => products

//export your model to use it anywhere
module.exports = Product;

//on this model we can run all normal db operations once we require it