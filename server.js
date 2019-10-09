require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connect to Database'))

app.use(express.json())

const recipiesRouter = require('./routes/recipies')
app.use('/api/recipies', recipiesRouter)


app.listen(5000, () => console.log('Server running on port 5k'))