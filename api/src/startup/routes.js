require('express-async-errors')
const { json } = require('express')
const morgan = require('morgan')

const errors = require('../middlewares/errors')

module.exports = function (app) {
	app.use(json())
	app.use(morgan('tiny'))

	app.use('/api/users', require('../routes/users'))
	app.use('/api/countries', require('../routes/countries'))

	app.get('/ping', (req, res) => {
		res.json({ status: 'success' })
	})

	app.use(errors)
}
