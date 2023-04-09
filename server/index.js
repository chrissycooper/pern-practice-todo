//run nodemon index or node index to start server

const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db'); //by using th pool we can run queries with postgres

//middleware
app.use(cors());
app.use(express.json()); //allowing us to have access to request.body so we can get json data

//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log('server has started on port 5000')
})