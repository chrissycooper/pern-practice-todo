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

app.post('/todos', async(req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
    );

    res.json(newTodo.rows[0]);

  } catch (err) {
    console.error(err.message)
  }
})

//get all todos
app.get('/todos', async(req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo")
    res.json(allTodos.rows)
  } catch (err) {
    console.error(err.message)
  }
})

//get a todo
app.get('/todos/:id', async(req, res) => {
  try {
    const { id } = req.params
    const singleTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id])
    res.json(singleTodo.rows[0])
  } catch (err) {
    console.error(err.message)
    
  }
})
//$1 and $2 are variable holders and they directly relate to the array that's the second argument of the query
//in plain language that query is saying 'update the todo table, set that table with the description which will be the first item in the array, and do that in the place setting (table row) where the id is equal to the second item in the following array (name tag matches)
//update a todo
app.put('/todos/:id', async(req, res) => {
  try {
    const {id} = req.params
    const {description} = req.body
    const updateTodo = await pool
    .query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
    res.json("response was updated!")
  } catch (err) {
    console.error(err.message)
  }
})

//delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
    res.json(`todo with id ${id} was deleted successfully`)
  } catch (err) {
    console.error(err)
  }
})

app.listen(5000, () => {
  console.log('server has started on port 5000')
})