const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-rajat:fdfffUmxQlIUZYFD@cluster0.jqeey.mongodb.net/portfolioDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
const itemsSchema = {
  name: String,
  email: String,
  subject: String,
  message: String
};

const Item = mongoose.model("Item", itemsSchema);
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
      var name = req.body.name;
      var email = req.body.email;
      var subject = req.body.subject;
      var message = req.body.message;
  const itemX = new Item({
    name: name,
    email: email,
    subject: subject,
    message: message
  });

    itemX.save();
    res.redirect("/");
  });

  app.get("/post.html", function(req, res) {
    res.sendFile(__dirname + "/post.html");
});

app.get("/post1.html", function(req, res) {
  res.sendFile(__dirname + "/post1.html");
});

app.get("/post2.html", function(req, res) {
  res.sendFile(__dirname + "/post2.html");
});

app.get("/post3.html", function(req, res) {
  res.sendFile(__dirname + "/post3.html");
});

app.get("/post4.html", function(req, res) {
  res.sendFile(__dirname + "/post4.html");
});

app.get("/post5.html", function(req, res) {
  res.sendFile(__dirname + "/post5.html");
});




let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function() {
  console.log("Server started.");
});
