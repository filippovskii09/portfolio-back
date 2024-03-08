const express = require("express");
const cors = require("cors");

const portfolio = require('./portfolio')

const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send("Welcome to your express server")
})

app.get('/portfolio', (req, res) => {
	res.send(portfolio)
})

const port = process.env.PORT || 4100;

app.listen(port, console.log(`server running on ${port}`))
