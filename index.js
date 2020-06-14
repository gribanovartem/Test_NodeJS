const express = require("express");
const app = express();

const PORT = process.env.PORT || 8003;

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

// const uri =
//    "mongodb+srv://gribanovartem22:159159@reacttypescript-77iet.mongodb.net/ReactTypeScript?retryWrites=true&w=majority";
// app.get("/todos", (req, res) => {
//    res.set("Access-Control-Allow-Origin", "*");
//    res.send(todos);
// });
// app.listen(PORT);

const MongoClient = require("mongodb").MongoClient;
const uri =
   "mongodb+srv://gribanovartem22:159159@reacttypescript-77iet.mongodb.net/ReactTypeScript?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
// const findDocuments = () => {
//    client.connect((err) => {
//       const collection = client.db("ReactTypeScript").collection("Todos");
//       collection.find({}).toArray(function (err, docs) {
//          console.log("Found the following records");
//          // console.log(docs);
//          return docs;
//       });
//    });
// };
// client.connect((err) => {
// const collection = client.db("ReactTypeScript").collection("Todos");
// collection.find({}).toArray(function(err, docs) {
//    console.log("Found the following records");
//    console.log(docs)
//  });;
// perform actions on the collection object
app.options('*', (req, res) => {
   res.set('Access-Control-Allow-Origin', '*');
   res.set("Access-Control-Allow-Headers", "Content-Type");
   res.send('ok');
 });
app.get("/todos", (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   client.connect((err) => {
      const collection = client.db("ReactTypeScript").collection("Todos");
      collection.find({}).toArray(function (err, docs) {
         console.log("Found the following records");
         console.log(docs);
         res.send(docs);
      });
   });
   
});
app.listen(PORT);
// client.close();
// });

// app.post("/todos", (req, res) => {
//    todos = [...todos, req.body];
//    res.send(req.body);
// });
