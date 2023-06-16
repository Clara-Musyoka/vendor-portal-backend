// structure of data to be stored. Used to have a defined scheme of how vendor details will be stored.

let mongoose = require('mongoose');
//structure
let vendor = {
    firstName: { type: String, required: true}, 
    middleName: { type: String, required: true},
    vendorEmail: { type: String, required: true},
    phoneNumber: { type: Number, required: true}, //you can also have a default value
    created_date: { type: Date, default: Date.now()}
    
}
//schema
let vendor_schema = new mongoose.Schema(vendor); //pass the vendor object you created above

//model
let Vendor = mongoose.model("Vendor", vendor_schema); //name of your model translates to your collection in lower case but in plural
// Vendor => vendors

//export your model to use it anywhere
module.exports = Vendor;

//on this model we can run all normal db operations once we require it