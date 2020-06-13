const express = require('express');

const app = express();

const PORT = process.env.PORT || 8003;

app.get('/todos', (req, res)=> {
   console.log('asgfasdg');
   res.send('gggg')
})

app.listen(PORT);