const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});


const users = `CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(200) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const lost_items = `CREATE TABLE IF NOT EXISTS lost_items (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    item_category VARCHAR(250),
    item_name VARCHAR(250),
    item_description VARCHAR(250),
    state VARCHAR(250),
    city VARCHAR(250),
    address VARCHAR(250),
    zip_code VARCHAR(250),
    user_id INT NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)`;

const found_items = `CREATE TABLE IF NOT EXISTS found_items (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    item_category VARCHAR(250),
    item_name VARCHAR(250),
    item_description VARCHAR(250),
    state VARCHAR(250),
    city VARCHAR(250),
    address VARCHAR(250),
    zip_code VARCHAR(250),
    user_id INT NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
)`;

const returnedItem = `CREATE TABLE IF NOT EXISTS returnedItem (
    return_id INT NOT NULL PRIMARY KEY,
    id INT NOT NULL,
    receiver VARCHAR(250),
    user_id VARCHAR(250),
    FOREIGN KEY (id) REFERENCES found_items(id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)

)`;


(async () => {
  try {
    const connection = await pool.getConnection();
    await connection.query(users);
    await connection.query(found_items);
    await connection.query(lost_items);
    await connection.query(returnedItem);
    connection.release();
    console.log("Tables created successfully.");
  } catch (err) {
    console.error("Error creating tables:", err.message);
  }
})();
module.exports = pool;
