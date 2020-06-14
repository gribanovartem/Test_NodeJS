const express = require("express");
const app = express();

const PORT = process.env.PORT || 8003;

const todos = [
   {
      _id: "5ee4eb0f99312979d0606182",
      title: "Завершить список дел",
      completed: false,
   },
   {
      _id: "5ee4eb0f99312979d0606183",
      title: "Добавить раздел 'Информация'",
      completed: false,
   },
   {
      _id: "5ee4eb0f99312979d0606184",
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
