//jshint esversion:6
const express = require('express');

const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hello world</h1>");
})

app.get("/contact", function (request, response) {
    response.send("contact me at samuella@gmail.com");
})

app.get("/about", function (request, response) {
    response.send("this website is owned by samuella m. aglago");
})

app.listen(3000, function () {
    console.log("Server started on 3000")
}); // listen to port 3000 for any http requests