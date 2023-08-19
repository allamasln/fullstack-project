const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
	res.json({ status: 'success' })
})

router.get('/:countryId', (req, res) => {
	res.json({ status: 'success' })
})

router.post('/', (req, res) => {
	res.json({ status: 'success' })
})

router.put('/:countryId', (req, res) => {
	res.json({ status: 'success' })
})

router.delete('/:countryId', (req, res) => {
	res.json({ status: 'success' })
})

module.exports = router
