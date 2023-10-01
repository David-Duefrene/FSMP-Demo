const express = require('express')
const { Pool } = require('pg')
// Const dotenv = require('dotenv')

// Dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// Create a PostgreSQL pool
const pool = new Pool({
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
})

// Define a route to retrieve random data from the database
app.get('/random-data', async (req, res) => {
	try {
		const queryResult = await pool.query('SELECT * FROM example_data ORDER BY random() LIMIT 1')
		const randomData = queryResult.rows[0]
		res.json(randomData)
	} catch (error) {
		console.error('Error querying database:', error)
		res.status(500).json({ error: 'Internal server error' })
	}
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

