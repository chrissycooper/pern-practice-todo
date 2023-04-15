const Pool = require("pg").Pool

const pool = new Pool({
  user: 'chrissy',
  password: 'jimminychristmas',
  host: 'localhost',
  port: 5432,
  database: 'perntodo'
})

module.exports = pool;