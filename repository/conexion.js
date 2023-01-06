const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'ejercicio',
  password: '1234'
})

const conectar = async () => {
  const client = await pool.connect()

  return client
}

exports.conectar = conectar