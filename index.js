const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
let databaseTodos;
let db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
let allowCrossDomain = function(req, res, next) {
   res.header('Access-Control-Allow-Origin', "*");
   res.header('Access-Control-Allow-Headers', "*");
   next();
 }
 app.use(allowCrossDomain);

const PORT = process.env.PORT || 8003;

const uri =
   "mongodb+srv://gribanovartem22:159159@reacttypescript-77iet.mongodb.net/ReactTypeScript?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect((err) => {
   if(err) {
      return console.log(err);
   }
   const collection = client.db("ReactTypeScript").collection("Todos");
   // perform actions on the collection object
   console.log(collection);
   app.get("/todos", (req, res) => {
      collection.find().toArray((err, docs) => {
         if (err) {
            console.log(err);
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.sendStatus(500);
         }
         res.send(docs);
      });
   });
   app.listen(PORT);
});
// app.post("/todos", (req, res) => {
//    todos = [...todos, req.body];
//    res.send(req.body);
// });

// const uri =
//    "mongodb+srv://gribanovartem22:159159@reacttypescript-77iet.mongodb.net/ReactTypeScript?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
// });
// client.connect((err) => {
//    console.log(client.db("ReactTypeScript").collection("Todos"));
//    databaseTodos = client.db("ReactTypeScript").collection("Todos");
//    // perform actions on the collection object
//    app.listen(PORT);
//    client.close();
// });
