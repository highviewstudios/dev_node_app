const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("open at High-View Studios")
});

app.listen(process.env.PORT || 8080, (req, res) => {
    console.log("Sever running on port 8080");
});