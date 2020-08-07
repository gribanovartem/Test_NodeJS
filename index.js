const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const PORT = process.env.PORT || 8003;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// const todos = [
//    {
//       id: 23523563463,
//       title: "Завершить список дел",
//       completed: false,
//    },
//    {
//       id: 45673568356,
//       title: "Добавить раздел 'Информация'",
//       completed: false,
//    },
//    {
//       id: 35684578964,
//       title: "Начать разработку блога",
//       completed: false,
//    },
// ];

// app.use(cors());

const uri = "mongodb+srv://gribanovartem22:159159@reacttypescript-77iet.mongodb.net/ReactTypeScript?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let collection;

client.connect((err) => {
   collection = client.db("ReactTypeScript").collection("Todos");
   collectionPosts = client.db("ReactTypeScript").collection("Posts");
   app.listen(PORT);
});

app.options("*", (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.set("Access-Control-Allow-Headers", "Content-Type");
   res.set("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS, DELETE");
   res.send("ok");
});

app.get("/todos", (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   collection.find().sort({_id: -1}).toArray(function (err, docs) {
      res.json(docs);
   });
});

app.post("/todos", function (request, response) {
   response.set("Access-Control-Allow-Origin", "*");
   if(!request.body) return response.sendStatus(400);
   collection.insertOne(request.body, function(err, results){
      console.log(results);
  });
   response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.put("/todos", function (request, response) {
   response.set("Access-Control-Allow-Origin", "*");
   if(!request.body) return response.sendStatus(400);
   collection.update({id: request.body.id}, {$set: {completed : request.body.completed}});
   response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.delete("/todos", function (request, response) {
   response.set("Access-Control-Allow-Origin", "*");
   if(!request.body) return response.sendStatus(400);
   collection.remove({id: request.body.id});
   response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/posts", (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   collectionPosts.find().sort({_id: -1}).toArray(function (err, docs) {
      res.json(docs);
   });
});