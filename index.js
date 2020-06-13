const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');

const app = express();
let databaseTodos;
let db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 8003;

const todos = [
   { title: "Завершить список дел", id: 23523563463, completed: false },
   { title: "Добавить раздел 'Информация'", id: 45673568356, completed: false },
   { title: "Начать разработку блога", id: 35684578964, completed: false },
];

app.get("/todos", (req, res) => {
   client.connect((err) => {
      console.log(client.db("ReactTypeScript").collection("Todos"));
      databaseTodos = client.db("ReactTypeScript").collection("Todos");
      databaseTodos.find().toArray((err, docs) => {
         if (err) {
            console.log(err);
            res.sendStatus(500);
         }
         res.send(docs);
      });
   });
   // res.send(todos);
   // databaseTodos
   //    .find()
   //    .toArray((err, docs) => {
   //       if (err) {
   //          console.log(err);
   //          res.sendStatus(500);
   //       }
   //       res.send(docs);
   //    });
});
app.post("/todos", (req, res) => {
   todos = [...todos, req.body];
   res.send(req.body);
});

const uri =
   "mongodb+srv://gribanovartem22:159159@reacttypescript-77iet.mongodb.net/ReactTypeScript?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
client.connect((err) => {
   console.log(client.db("ReactTypeScript").collection("Todos"));
   databaseTodos = client.db("ReactTypeScript").collection("Todos");
   // perform actions on the collection object
   app.listen(PORT);
   client.close();
});
