require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

//QUERIES
const SELECT_ALL_PRODUCTS_QUERY = "SELECT * FROM products";


app.get('/', (req, res) => {
    //res.sendFile(__dirname + "/index.html");
    res.write("running");
    res.send();
});

app.get('/products', function(req, res) {
    connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        } else {
            return res.json({
                data : results
            });
        }
    });
});

app.listen(process.env.PORT || 8080, (req, res) => {
    console.log("Sever running on port 8080");
});