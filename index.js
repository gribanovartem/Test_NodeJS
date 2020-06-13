const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 8003;

const todos = [
   { title: "gggggggggg", id: 23523563463, completed: false },
   { title: "hhhhhhhhhh", id: 45673568356, completed: false },
   { title: "aaaaaaaaaa", id: 35684578964, completed: false },
];

app.get("/todos", (req, res) => {
   return res.send(todos);
});
app.post("/todos", (req, res) => {
   console.log(req.body);
   res.send('aaaaaaaaaa')
});

app.listen(PORT);
