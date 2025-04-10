// Import required modules
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create an Express app
const app = express();

// Set up CORS options
const optionalUseOfCors = {
  origin: ["http://localhost:3000"],
};

// Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(optionalUseOfCors));

// Start server
app.listen(2024, () => console.log("Server listening on port 2024"));

// MySQL connection
const Connection = mysql.createConnection({
  host: "11111111111",
  user: "yoooooooo",
  password: "yooooo",
  database: "yooooo",
});

// Connect to MySQL
Connection.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// Create tables
app.get("/create", (req, res) => {
  // Products table
  let createProducts = `
    CREATE TABLE IF NOT EXISTS Products (
      product_id INT AUTO_INCREMENT,
      product_name VARCHAR(100) NOT NULL,
      product_url VARCHAR(1000) NOT NULL,
      PRIMARY KEY (product_id)
    )`;

  // ProductsDescription table
  let createProductsDescription = `
    CREATE TABLE IF NOT EXISTS ProductsDescription (
      description_id INT AUTO_INCREMENT,
      product_id INT(10) NOT NULL,
      product_brief_description TEXT NOT NULL,
      product_description TEXT NOT NULL,
      product_img VARCHAR(1000) NOT NULL,
      product_link VARCHAR(1000) NOT NULL,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
    )`;

  // ProductsPrice table
  let createProductsPrice = `
    CREATE TABLE IF NOT EXISTS ProductsPrice (
      price_id INT AUTO_INCREMENT,
      product_id INT(11) NOT NULL,
      starting_price VARCHAR(100) NOT NULL,
      price_range VARCHAR(100) NOT NULL,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
    )`;

  // Users table
  let createUsers = `
    CREATE TABLE IF NOT EXISTS Users (
      user_id INT AUTO_INCREMENT,
      user_name VARCHAR(100) NOT NULL,
      user_password VARCHAR(100) NOT NULL,
      PRIMARY KEY (user_id)
    )`;

  // Orders table
  let createOrders = `
    CREATE TABLE IF NOT EXISTS Orders (
      order_id INT AUTO_INCREMENT,
      product_id INT(11) NOT NULL,
      user_id INT(11) NOT NULL,
      PRIMARY KEY (order_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
    )`;

  // Start the query execution
  Connection.query(createProducts, (err) => {
    if (err) {
      console.error("Error creating Products table:", err);
    } else {
      console.log("Products table created or already exists");
    }

    // Create ProductsDescription table
    Connection.query(createProductsDescription, (err) => {
      if (err) {
        console.error("Error creating ProductsDescription table:", err);
      } else {
        console.log("ProductsDescription table created or already exists");
      }

      // Create ProductsPrice table
      Connection.query(createProductsPrice, (err) => {
        if (err) {
          console.error("Error creating ProductsPrice table:", err);
        } else {
          console.log("ProductsPrice table created or already exists");
        }

        // Create Users table
        Connection.query(createUsers, (err) => {
          if (err) {
            console.error("Error creating Users table:", err);
          } else {
            console.log("Users table created or already exists");
          }

          // Create Orders table
          Connection.query(createOrders, (err) => {
            if (err) {
              console.error("Error creating Orders table:", err);
            } else {
              console.log("Orders table created or already exists");
            }

            // Send success response after all tables are created
            res.send("All tables created successfully");
          });
        });
      });
    });
  });
});

// Add iPhone product
app.post("/addiphones", (req, res) => {
  console.table(req.body);

  const product_name = req.body.product_name;
  const product_url = req.body.product_url;
  const product_Description = req.body.product_Description;
  const product_brief_Description = req.body.product_brief_Description;
  const product_img = req.body.product_img;
  const product_link = req.body.product_link;
  const starting_price = req.body.starting_price;
  const price_range = req.body.price_range;

  Connection.beginTransaction((err) => {
    if (err) {
      console.error("Transaction Error:", err);
      return res.status(500).send("Transaction Error");
    }

    const insertProduct = `
      INSERT INTO Products (product_name, product_url)
      VALUES (?, ?)`;

    const insertDescription = `
      INSERT INTO ProductsDescription 
      (product_id, product_brief_description, product_description, product_img, product_link)
      VALUES (?, ?, ?, ?, ?)`;

    const insertPrice = `
      INSERT INTO ProductsPrice
      (product_id, starting_price, price_range)
      VALUES (?, ?, ?)`;


    Connection.query(insertProduct, [product_name, product_url], (err, result) => {
      if (err) {
        return Connection.rollback(() => {
          console.error("Insert Product Error:", err);
          res.status(500).send("Insert Product Failed");
        });
      }

      const product_id = result.insertId;

      Connection.query(insertDescription, [
        product_id,
        product_brief_Description,
        product_Description,
        product_img,
        product_link,
      ], (err) => {
        if (err) {
          return Connection.rollback(() => {
            console.error("Insert Description Error:", err);
            res.status(500).send("Insert Description Failed");
          });
        }

        Connection.query(insertPrice, [product_id, starting_price, price_range], (err) => {
          if (err) {
            return Connection.rollback(() => {
              console.error("Insert Price Error:", err);
              res.status(500).send("Insert Price Failed");
            });
          }

          Connection.commit((err) => {
            if (err) {
              return Connection.rollback(() => {
                console.error("Commit Error:", err);
                res.status(500).send("Commit Failed");
              });
            }

            res.send("Product added successfully");
          });
        });
      });
    });
  });
});

// Add User
app.post("/adduser", (req, res) => {
  const { user_name, user_password } = req.body;

  const insertUser = `
    INSERT INTO Users (user_name, user_password)
    VALUES (?, ?)`;

  Connection.query(insertUser, [user_name, user_password], (err, result) => {
    if (err) {
      console.error("Insert User Error:", err);
      return res.status(500).send("Failed to insert user");
    }

    res.send("User added successfully");
  });
});

// Delete product
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const deleteProduct = `DELETE FROM Products WHERE product_id = ?`;

  Connection.query(deleteProduct, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error deleting product.");
    }

    res.json({
      message: "Product deleted successfully",
      affectedRows: result.affectedRows,
    });
  });
});

// Update product
app.put("/update", (req, res) => {
  const { newName, id } = req.body;

  let updateName = `UPDATE Products SET product_name = ? WHERE product_id = ?`;

  Connection.query(updateName, [newName, id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error updating product.");
    }

    console.log(result.affectedRows + " Rows updated successfully");
    res.send(result);
  });
});
