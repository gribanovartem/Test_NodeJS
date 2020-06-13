const express = require('express');

const app = express();

app.get('/todos', (req, res)=> {
   console.log('asgfasdg');
   res.send('gggg')
})

app.listen(8003);