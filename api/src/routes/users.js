const { Router } = require('express')

const router = Router()

router.post('/signup', (req, res) => {
	res.json({ status: 'success' })
})

router.post('/signin', (req, res) => {
	res.json({ status: 'success' })
})

module.exports = router
