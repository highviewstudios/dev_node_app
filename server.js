require('dotenv').config();
const express = require('express');

const app = express();


app.get('/', (req, res) => {
    //res.sendFile(__dirname + "/index.html");
    res.write("<h1>hello</h1></br>");
    res.write(process.env.DB_HOST);
    res.send();
});

app.listen(process.env.PORT || 8080, (req, res) => {
    console.log("Sever running on port 8080");
});