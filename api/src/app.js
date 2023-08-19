const express = require('express')

const app = express()

require('./startup/routes')(app)

const port = 4040

app.listen(port, () => {
	console.log(`${process.env.NODE_ENV}: Example app listening on port ${port}`)
})
