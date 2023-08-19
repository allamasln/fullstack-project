const { Router } = require('express')

const countryController = require('../controllers/countries')

const router = Router()

router.get('/', countryController.getAll)
router.get('/:countryId', countryController.getOne)
router.post('/', countryController.create)
router.put('/:countryId', countryController.update)
router.delete('/:countryId', countryController.deleteOne)

module.exports = router
