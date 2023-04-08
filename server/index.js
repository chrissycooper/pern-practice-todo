//run nodemon index or node index to start server

const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); //allowing us to have access to request.body so we can get json data

app.listen(5000, () => {
  console.log('server has started on port 5000')
})