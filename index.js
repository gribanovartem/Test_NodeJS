const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 8003;

const todos = [
   { title: "Завершить список дел", id: 23523563463, completed: false },
   { title: "Добавить раздел 'Информация'", id: 45673568356, completed: false },
   { title: "Начать разработку блога", id: 35684578964, completed: false },
];

app.get("/todos", (req, res) => {
   return res.send(todos);
});
app.post("/todos", (req, res) => {
   todos = [...todos, req.body]
   res.send(req.body)
});

app.listen(PORT);
