# Delani-Studio

## Author

- Clara Musyoka
- Elsie Muthiani
- Josphat Mochache
- Isaac Tegei

## Description

This project is a web application that allows sellers to manage their stock on safaricom masoko

## Live Page



## Installation / Setup instruction

- Open Terminal {Ctrl+Alt+T}

- git clone `https://github.com/Clara-Musyoka/module_one_groupwork.git`

- code . or atom . depending on the text editor of your choise.

- 

## Technologies Used

- HTML5
- Bootstrap
- jQuery
- Node
- Express
- Mongo DB

## BDD
### user stories
### As a vendor i should b able to:
- View landing home page
- inputs their identification details
- Accepts terms and conditions
- Verification happens (of the emails etc)
- Details of Vendor Ids saved uniquely in a table in a  DB
- User sees a page related to their products
- Can select category of product to update (Phones and phone accessories)
- Can upload new products.(With name description, model, price, number remainining)
- New products get saved in a DB with details
- After uploading the products they can view them in front page of Masoko
- Product can be picked and bought by a customer following the existing add to  cart  journey
- If something get’s bought, the number of products remaining can be dereased
- Vendor notified on an item bought Via an email. 
 ### Endpoints
 - GET /home - > view landing page of vendor portal with login/Register buttons
 - POST /login  -> login into the portal
 - GET /Products  -> list of vendors products per category
 - POST /Products/category -> create new products per category
 - PUT /products/category/name -> Update details of a product
 - GET /masokohomepage -> New product updated

 ### Models
 - Vendor:
 name (string)
 email (string)
 phone number (string)
 - Phones
 - Products accesories

## Known Bugs

- 

## Contact Information

If you have any question or contributions, please email me at [musyokamusenya@gmail.com][elsiedeby@gmail.com] [josphatmochache@gmail.com] [isaac.tegei@gmail.com]

## License

- _MIT License:_
- Copyright (c) 2022 **Clara Musyoka**