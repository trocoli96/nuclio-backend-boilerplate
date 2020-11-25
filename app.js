const express = require('express')
const app = express();
const port = 8000;
//System imports
require('dotenv').config();
require ('./Mongo/connection');
app.use(express.json())


app.get('/puta', (req, res) => {
  res.json('Hello World!bitches')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.get('/', () => "Hello babies");

var comments_controller = require('./Controllers/CommentController');

app.get('/comments', comments_controller.action_getAllComments);
app.post('/comments', comments_controller.action_createComment);
app.delete('/comments', comments_controller.action_deleteComment);
app.get('/comments/:id', comments_controller.action_getComment);
