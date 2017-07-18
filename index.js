const path = require('path');
const express = require('express');
const opn = require('opn');
const app = express();


app.get('/', function (req, resp, next) {
    const data = {
        status: 200,
        message: "OK"
    };

    resp.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, function () {
    console.log("Server started! on 3000");

    opn('http://localhost:3000');
});