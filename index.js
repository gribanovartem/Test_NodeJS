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
app.get("/todos", (req, res) => {
   res.set("Access-Control-Allow-Origin", "*");
   res.send(todos);
});
app.listen(PORT);
// app.post("/todos", (req, res) => {
//    todos = [...todos, req.body];
//    res.send(req.body);
// });
