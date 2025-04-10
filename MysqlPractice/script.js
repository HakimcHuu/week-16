// function formSubmit(e) {
//     e.preventDefault();
//     return fetch("http://localhost:2024/update", {
//         method: "PUT",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             id: document.querySelector("#update-product-form input[product_id=id]").value,
//             newName: document.querySelector("input[product_name=updatedName]").value,
//         }),
//     })
//     .then(response => response.json())
//     .then(data => alert("Name Updated"));
//     document.getElementById("update-product-form").reset();
// }
// document.getElementById("update-product-form").addEventListener("submit",formSubmit);


// document.getElementById("update-product-form").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const productId = document.querySelector("#update-product-form input[name=product_id]").value;
//     const productName = document.querySelector("#update-product-form input[name=product_name]").value;

//     fetch("https://your-server-url/update", {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             id: productId,
//             name: productName
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert("Product updated successfully");
//         } else {
//             alert("Failed to update product");
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("An error occurred while updating the product");
//     });
// });



// function updateProduct(e) {
//     e.preventDefault();

//     return fetch("http://localhost:2024/update", {
//         method: "PUT",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             id: document.querySelector("#update-product-form input[product_id=id]").value,
//             newName: document.querySelector("input[product_name=updatedName]").value,
//         }),
//     })
//     .then(response => response.json())
//     .then(data => alert("Name Updated"));
// }
// document.getElementById("update-product-form").addEventListener("submit", updateProduct);




// function deleteProduct(e) {
//     e.preventDefault();

//     fetch("http://localhost:2024/delete", {
//         method: "DELETE",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             id: document.querySelector("#delete-product-form input[product_id=id]").value,
//             // newName: document.querySelector("input[product_name=updatedName]").value,
//         }),
//     })
//     .then(response => response.json());
//     alert("product deleted");
//     // document.getElementById("delete-product-form").reset();
// }

// document.getElementById("delete-product-form").addEventListener("submit", deleteProduct);










document
  .getElementById("update-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("product_id").value;
    const newName = document.getElementById("product_name").value;

    fetch("http://localhost:2024/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, newName }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Product updated successfully!");
        console.log(data);
      })
      .catch((err) => {
        alert("Error updating product.");
        console.error(err);
      });
  });














// // Import required modules
// const mysql = require("mysql2");
// const express = require("express");
// const bodyParser = require("body-parser");
// // Create an Express app
// var app = express();

// // Set up server to listen on port 2024 and log a message when listening
// app.listen(2024, () => console.log("listening to:2024"));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// // app.use(app.json());
// // app.use(app.urlencoded({ extended: true}));

// // Create a MySQL connection
// var Connection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "Hakimm",
//   password: "Hakimm",
//   database: "Hakimm"
// });

// // Connect to MySQL
// Connection.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("connected to mysql");
//   }
// });

// // Define a route to create tables
// app.get("/create", (req, res) => {
//   let Message = "Tables created";

//   // Create Table 1
//   let CreateProducts = `CREATE TABLE if not exists Products(
//     product_id int auto_increment,
//     product_name varchar(100) not null,
//     product_url varchar(100) not null,
//     primary key(product_id)
//   )`;

//   // Create Table 2
//   let CreateProductsDiscription = `CREATE TABLE if not exists ProductsDiscription(
//     description_id int auto_increment,
//     product_id int(10) not null,
//     product_brief_discription Text not null,
//     product_discription Text not null,
//     product_img varchar(100) not null,
//     product_link varchar(100) not null,
//     PRIMARY KEY (description_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
//   )`;

//   // Create Table 3
//   let CreateProductsPrice = `CREATE TABLE if not exists ProductsPrice(
//   price_id int auto_increment,
//     product_id int(11) not null,
//     starting_price varchar(100) not null,
//     price_range varchar(100) not null,
//     PRIMARY KEY (price_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id)
//   )`;

//   // Execute the create table queries
//   Connection.query(CreateProducts, (err, result, fields) => {
//     // if (err) console.log(err);
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Table 1 created successfully");
//     }
//   });

//   Connection.query(CreateProductsDiscription, (err, result, fields) => {
//      // if (err) console.log(err);
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Table 2 created successfully");
//     }
//   });

//   Connection.query(CreateProductsPrice, (err, result, fields) => {
//     // if (err) console.log(err);
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Table 3 created successfully");
//     }
//   });

//   res.end(Message);
// });

// app.post("/addiphones", (req, res) => {
// console.table(req.body);
// // const {product_name,description, product_url,brief_description,storage_range} = req.body;
// const product_name = req.body.product_name;
// // const image_url = `uploads/${req.file.filename}`;
// const description = req.body.description;
// const product_url = req.body.product_url;
// const brief_description = req.body.brief_description;
// const storage_range = req.body.storage_range;
// const price_range = req.body.price_range;
// const buying_link = req.body.buying_link;
// const payment_options = req.body.payment_options;
// const Apple_TV_plus = req.body.Apple_TV_plus;
// const Apple_Fitness_plus = req.body.Apple_Fitness_plus;
// const Apple_Arcade = req.body.Apple_Arcade;

// let sql = `INSERT INTO Products (product_name, product_url) VALUES ('${product_name}', '${product_url}')`;
// Connection.query(sql, (err, result) => {
//   if (err) console.log(err);
//   else console.log("Data inserted into Products table");


// let insertProductName ='INSERT INTO Products(product_name) VALUES (?)';
// let insertdescription_data=`INSERT INTO description(product_id, description) VALUES (?, ?)`;
// let insertProduct_url ='INSERT INTO product_url(product_id, product_url ) VALUES (?, ?)';


  // connection.query(insertProductName,[product_name], (err, result,fields) => {
  //   if (err) console.log(err);
  //   else console.table(result);

  //   const id=result.insertId;
  //   console.log("id from product table to be used as a foreign key on the other table".id);

  //   connection.query(insertdescription_data,[id,description], (err, result ,fields) => { 
  //     if (err) console.log(err);
  //     else console.log("Data inserted into Description table");
  //   });

  //   connection.query(insertProduct_url,[id,product_url], (err, result,fields) => {
  //     if (err) console.log(err);
  //     else console.log("Data inserted into product_url table");
  //   });
  //   res.end("Data inserted into Description table");
  //   console.log("Data inserted into Description table");
  // });


// TO insert to other tables

  // let product_id = result.insertId;
  // let description_data = `INSERT INTO ProductsDiscription
  // (product_id, product_brief_discription, product_discription, product_img, product_link) VALUES
  // ('${product_id}', '${brief_description}', '${description}', '${storage_range}', '${buying_link}')`;
  // Connection.query(description_data, (err, result) => {
  //   if (err) console.log(err);
  //   else console.log("Data inserted into ProductsDiscription table");
  // });

  // let price_data = `INSERT INTO ProductsPrice (product_id, starting_price, price_range) VALUES
  // ('${product_id}', '${price_range}', '${price_range}')`;
  // Connection.query(price_data, (err, result) => {
  //   if (err) console.log(err);
  //   else console.log("Data inserted into ProductsPrice table");
  // });
//   // let payment_options_data = `INSERT INTO Payment_Options (product_id, payment_options) VALUES
//   // ('${product_id}', '${payment_options}')`;
//   // Connection.query(payment_options_data, (err, result) => {
//   //   if (err) console.log(err);
//   //   else console.log("Data inserted into Payment_Options table");
//   // });
//   // let Apple_TV_plus_data = `INSERT INTO Apple_TV_Plus (product_id, Apple_TV_plus) VALUES
//   // ('${product_id}', '${Apple_TV_plus}')`;
//   // Connection.query(Apple_TV_plus_data, (err, result) => {
//   //   if (err) console.log(err);
//   //   else console.log("Data inserted into Apple_TV_Plus table");
//   // });
//   // let Apple_Fitness_plus_data = `INSERT INTO Apple_Fitness_Plus (product_id, Apple_Fitness_plus) VALUES
//   // ('${product_id}', '${Apple_Fitness_plus}')`;
//   // Connection.query(Apple_Fitness_plus_data, (err, result) => {
//   //   if (err) console.log(err);
//   //   else console.log("Data inserted into Apple_Fitness_Plus table");
//   // });
//   // let Apple_Arcade_data = `INSERT INTO Apple_Arcade (product_id, Apple_Arcade) VALUES
//   // ('${product_id}', '${Apple_Arcade}')`;
//   // Connection.query(Apple_Arcade_data, (err, result) => {
//   //   if (err) console.log(err);
//   //   else console.log("Data inserted into Apple_Arcade table");
//   // });
//   // res.end("Data inserted into Products table");

//   // let sql2 = "SELECT * FROM Products WHERE product_name='" + product_name + "' AND product_url='" + product_url + "'";

//   // Connection.query(sql2, (err, result, fields) => {
//   //   if (err) console.log(err);
//   //   else {
//   //     console.log(result);
//   //     res.end("Data fetched successfully");
//   //     // addedProductId=result[0].product_id;
//   //     // console.log(addedProductId);
//   //   };
//   // });
  
//   app.get("/products", (req,res) => {
//     connection.query(
//       "SELECT * FROM Products join Productsdiscription join Productsprice on products.product_id=Productsdiscription.product_id AND Products.Product_id=Productsprice.product_id",
//       (err, result, fields) => {
//         console.table(result);
        
//         if (err) console.log(err);
//         else {
//           res.send(result);
//         };
//       });
//   });

//   app.get('/simple_productsList', (req, res) => {
//     connection.query(
//       "SELECT products.product_id As id,products.product_name,Productsdiscription.Productsdiscription,Productsprice.Productsprice FROM Products join Productsdiscription join Productsprice on products.product_id=Productsdiscription.product_id AND Products.Product_id=Productsprice.product-id",
//       (err, result, fields) => {
//         console.table(result);
//         if (err) console.log(err);
//         else {
//           res.send(result);
//         };
//       });
//   });


// });

//   res.end("Data inserted into Products table");
// });












//  const mysql=require("mysql2");
// // const express=require("express");
// // var app=express();
// // app.listen(2024,()=>console.log("listening to:2024"));

// // var Connection = mysql.createConnection(
// // {
// //     host     :"127.0.0.1",
// //     user     :"Hakimm",
// //     password :"Hakimm",
// //     database :"Hakimm"
// // });

// // Connection.connect((err)=>{
// // if(err) {console.log(err);
// // }
// // else{
// //     console.log("connected to mysql");
// // }
// // });

// // app.get("/create",(req,res)=>{
// // let Message="Table created";
        
//  let createProducts=`CREATE TABLE if not exists Products(
//     product_id int auto_increment,
//      product_name varchar(100) not null,
//      product_url varchar(100) not null,
//      primary key(product_id)
//     )`;

// //     let createProductsDiscription=`CREATE TABLE if not exists ProductsDiscription(
// //     description_id int auto_increment,
// //     product_id int(10) not null,
// //     product_brief_discription Text not null,
// //     product_discription Text not null,
// //     product_img varchar(100) not null,
// //     product_link varchar(100) not null,
// //     PRIMARY KEY (description_id),
// //     FOREIGN KEY (product_id) REFERENCES Products(product_id)
// //     )`;

// //     let createProductsPrice=`CREATE TABLE if not exists ProductsPrice(
// //     price_id int auto_increment,
// //     product_id int(11) not null,
// //     starting_price varchar(100) not null,
// //     price_range varchar(100) not null,
// //     PRIMARY KEY (price_id),
// //     FOREIGN KEY (product_id) REFERENCES Products(product_id),
// //     )`;

    
// //     Connection.query(createProducts,(err,result,fields)=>{
// //     if(err) console.log(err);
// //     });

// //     Connection.query(createProductsDiscription,(err,result,fields)=>{
// //     if(err) console.log(err);
// //     });
    
// //     Connection.query(createProductsPrice,(err,result,fields)=>{
// //     if(err) console.log(err);
// //     });
// //     res.end(Message);
// // });






















// Import required modules
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const multer = require('multer');
// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
// Set up multer middleware
const upload = multer({ storage: storage });


// Create an Express app
var app = express();

let optionalUseOfCors={
  origin:[
    'http://localhost:3000'
    
  ]
}

// Set up server to listen on port 2024 and log a message when listening
app.listen(2024, () => console.log("listening to:2024"));

// Parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}))
app.use(cors(optionalUseOfCors));

// Create a MySQL connection
var Connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "Hakimm",
  password: "Hakimm",
  database: "Hakimm"
});

// Connect to MySQL
Connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to mysql");
  }
});

// Define a route to create tables
app.get("/create", (req, res) => {
  let Message = "Tables created";

  let createProducts = `CREATE TABLE IF NOT EXISTS Products(
    product_id int AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    product_url VARCHAR(100) NOT NULL,
    PRIMARY KEY (product_id)
  )`;

  let createProductsDiscription = `CREATE TABLE IF NOT EXISTS ProductsDiscription(
    description_id int AUTO_INCREMENT,
    product_id int(10) NOT NULL,
    product_brief_discription TEXT NOT NULL,
    product_discription TEXT NOT NULL,
    product_img VARCHAR(1000) NOT NULL,
    product_link VARCHAR(100) NOT NULL,
    PRIMARY KEY (description_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  let createProductsPrice = `CREATE TABLE IF NOT EXISTS ProductsPrice(
    price_id int AUTO_INCREMENT,
    product_id int(11) NOT NULL,
    starting_price VARCHAR(100) NOT NULL,
    price_range VARCHAR(100) NOT NULL,
    PRIMARY KEY (price_id),
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
  )`;

  Connection.query(createProducts, (err, result, fields) => {
    if (err) console.log(err);
  });

  Connection.query(createProductsDiscription, (err, result, fields) => {
    if (err) console.log(err);
  });

  Connection.query(createProductsPrice, (err, result, fields) => {
    if (err) console.log(err);
  });

  res.end(Message);
});

// Define a route to add iPhone products
app.post("/addiphones", upload.single('product_img'), (req, res) => {
  console.table(req.body);
  // const product_img =req.body.product_img
  //  req.file.filename; // Use req.file.filename instead of req.body.product_img
  const product_name = req.body.product_name;
  const product_url = req.body.product_url;
  const product_discription = req.body.product_discription;
  const product_brief_discription = req.body.product_brief_discription;
  const product_img = `uploads/${req.body.product_img}`;
  const product_link = req.body.product_link;
  const starting_price = req.body.starting_price;
  const price_range = req.body.price_range;
  // const Apple_TV_plus = req.body.Apple_TV_plus;
  // const Apple_Fitness_plus = req.body.Apple_Fitness_plus;
  // const Apple_Arcade = req.body.Apple_Arcade;

  Connection.beginTransaction((err) => {
    if (err) console.log(err);

    let insertProduct = `INSERT INTO Products (product_name, product_url) VALUES (?, ?)`;
    let insertDescription = `INSERT INTO ProductsDiscription (product_id, product_brief_discription, product_discription, product_img, product_link) VALUES (?, ?, ?, ?, ?)`;
    let insertPrice = `INSERT INTO ProductsPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)`;

    Connection.query(insertProduct, [product_name, product_url], (err, result, fields) => {
      if (err) {
        return Connection.rollback(() => console.log(err));
      }

      const product_id = result.insertId;

      Connection.query(insertDescription, [product_id, product_brief_discription, product_discription, product_img, product_link], (err, result, fields) => {
        if (err) {
          return Connection.rollback(() => console.log(err));
        }

        Connection.query(insertPrice, [product_id, price_range, starting_price], (err, result, fields) => {
          if (err) {
            return Connection.rollback(() => console.log(err));
          }

          Connection.commit((err) => {
            if (err) console.log(err);
            res.end("Data inserted successfully");
          });
        });
      });
    });
  });
});


// app.post("/addiphones", (req, res) => {
//   console.table(req.body);
//   const product_img = req.body.product_img;
//   const product_name = req.body.product_name;
//   const description = req.body.description;
//   const product_url = req.body.product_url;
//   const brief_description = req.body.brief_description;
//   const storage_range = req.body.storage_range;
//   const price_range = req.body.price_range;
//   const buying_link = req.body.buying_link;
//   const payment_options = req.body.payment_options;
//   const Apple_TV_plus = req.body.Apple_TV_plus;
//   const Apple_Fitness_plus = req.body.Apple_Fitness_plus;
//   const Apple_Arcade = req.body.Apple_Arcade;

//   Connection.beginTransaction((err) => {
//     if (err) console.log(err);

//     let insertProduct = `INSERT INTO Products (product_name, product_url) VALUES (?, ?)`;
//     let insertDescription = `INSERT INTO ProductsDiscription (product_id, product_brief_discription, product_discription, product_img, product_link) VALUES (?, ?, ?, ?, ?)`;
//     let insertPrice = `INSERT INTO ProductsPrice (product_id, starting_price, price_range) VALUES (?, ?, ?)`;

//     Connection.query(insertProduct, [product_name, product_url], (err, result, fields) => {
//       if (err) {
//         return Connection.rollback(() => console.log(err));
//       }

//       const product_id = result.insertId;

//       Connection.query(insertDescription, [product_id, brief_description,product_img,description, storage_range, buying_link], (err, result, fields) => {
//         if (err) {
//           return Connection.rollback(() => console.log(err));
//         }

//         Connection.query(insertPrice, [product_id, price_range, price_range], (err, result, fields) => {
//           if (err) {
//             return Connection.rollback(() => console.log(err));
//           }

//           Connection.commit((err) => {
//             if (err) console.log(err);
//             res.end("Data inserted successfully");
//           });
//         });
//       });
//     });
//   });
// });

// Define a route to retrieve iPhone products
app.get("/products", (req, res) => {
  let sql = `
    SELECT
      Products.product_id,
      Products.product_name,
      ProductsDiscription.product_brief_discription,
      ProductsDiscription.product_discription,
      ProductsDiscription.product_img,
      ProductsDiscription.product_link,
      ProductsPrice.starting_price,
      ProductsPrice.price_range
    FROM
      Products
    JOIN
      ProductsDiscription ON Products.product_id = ProductsDiscription.product_id
    JOIN
      ProductsPrice ON Products.product_id = ProductsPrice.product_id
  `;

  Connection.query(sql, (err, result, fields) => {
    if (err) console.log(err);
    else {
      res.json({products:result});
    }
  });
});

// Define a route to retrieve a simple list of iPhone products
app.get("/simple_productsList", (req, res) => {
  let sql = `
    SELECT
      Products.product_id,
      Products.product_name,
      ProductsDiscription.product_brief_discription,
      ProductsPrice.starting_price,
      ProductsPrice.price_range
    FROM
      Products
    JOIN
      ProductsDiscription ON Products.product_id = ProductsDiscription.product_id
    JOIN
      ProductsPrice ON Products.product_id = ProductsPrice.product_id
  `;

  Connection.query(sql, (err, result, fields) => {
    if (err) console.log(err);
    else {
      res.send(result);
    }
  });
});

// Define a route to update a product option 1

// app.put("/update", (req, res) => {
//   let newName="samsunggalaxy";
//   let id="11";
//   // let updateName = "UPDATE products SET product_name = ? WHERE product_id = ?";
//   let updateName = `UPDATE products SET product_name = '${newName}' WHERE product_id = ${id}`;

//   Connection.query(updateName, [newName,id], (err, result, fields) => {
//     if (err) console.log(err);
//     else {
//       res.send("Data updated successfully");
//     }
//   });
// });

// Define a route to delete a product option 2
app.put("/update", (req, res) => {
  const { newName, id } = req.body;

  let updateName = `UPDATE products SET product_name = '${newName}' WHERE product_id = ${id}`;

  Connection.query(updateName, (err, result, fields) => {
    if (err) console.log(err);
    console.log(result.affectedRows + "Rows updated successfully");
    res.send(result);
  });
});

// app.put("/update",(req, res) => {
//   // let newName = "samsung";
//   // let id = "11";
//   const {newName,id}=req.body;

//   let updateName = `UPDATE products SET product_name = '${newName}' WHERE product_id = ${id}`;
//   C;onnection.query(updateName, (err, result, fields) => {
//     if (err) console.log(err);
//     else {
//       res.send("Data updated successfully");
//     }
//   });
// })

// Define a route to delete a product the order has to be as follows

app.delete("/delete", (req, res) => {
  // let id = "9";
  const { id } = req.body;

  let deleteProductsDiscription = `DELETE FROM ProductsDiscription WHERE product_id = ${id}`;
  let deleteProductsPrice = `DELETE FROM ProductsPrice WHERE product_id = ${id}`;
  let deleteProduct = `DELETE FROM products WHERE product_id = ${id}`;

  Connection.query(deleteProductsDiscription, (err, result, fields) => {
    if (err) console.log(err);
    console.log(result.affectedRows + "Rows deleted successfully");
    res.end(result.affectedRows + "Rows deleted successfully");
  });
  Connection.query(deleteProductsPrice, (err, result, fields) => {
    if (err) console.log(err);
    console.log(result.affectedRows + "Rows deleted successfully");
    res.end(result.affectedRows + "Rows deleted successfully");
  });
  Connection.query(deleteProduct, (err, result, fields) => {
    if (err) console.log(err);
    console.log(result.affectedRows + "Rows deleted successfully");
    res.end(result.affectedRows + "Rows deleted successfully");
  });
});

