const express = require("express");

const app = express();

const PORT = process.env.PORT || 8003;

const todos = [
   { title: "gggggggggg", id: 23523563463, completed: false },
   { title: "hhhhhhhhhh", id: 45673568356, completed: false },
   { title: "aaaaaaaaaa", id: 35684578964, completed: false },
];

app.get("/todos", (req, res) => {
   console.log("asgfasdg");
   return res.send(todos);
});

app.listen(PORT);
