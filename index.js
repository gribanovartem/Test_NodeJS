const express = require("express");
const app = express();

const PORT = 8003;

const todos = [
   {
      id: 23523563463,
      title: "Завершить список дел",
      completed: false,
   },
   {
      id: 45673568356,
      title: "Добавить раздел 'Информация'",
      completed: false,
   },
   {
      id: 35684578964,
      title: "Начать разработку блога",
      completed: false,
   },
];

const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://gribanovartem22:159159@reacttypescript-77iet.mongodb.net/ReactTypeScript?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let collection;

client.connect((err) => {
   collection = client.db("ReactTypeScript").collection("Todos");
   app.listen(PORT);
});

app.options("*", (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.set("Access-Control-Allow-Headers", "Content-Type");
   res.send("ok");
});

app.get("/todos", (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   collection.find({}).toArray(function (err, docs) {
      console.log("Found the following records");
      console.log(docs);
      res.json(docs);
   });
});