const { Router } = require('express')

const countryController = require('../controllers/countries')
const { upload } = require('../models/country')

const { countryValidationSchema } = require('../models/country')
const validateParamId = require('../utils/validateParamId')
const validate = require('../middlewares/validate')

const router = Router()

router.get('/', countryController.getAll)
router.get(
	'/:countryId',
	validateParamId('countryId'),
	validate,
	countryController.getOne
)
router.post(
	'/',
	upload.single('flag'),
	countryValidationSchema,
	validate,
	countryController.create
)
router.put(
	'/:countryId',
	validateParamId('countryId'),
	upload.single('flag'),
	countryValidationSchema,
	validate,
	countryController.update
)
router.delete(
	'/:countryId',
	validateParamId('countryId'),
	validate,
	countryController.deleteOne
)

module.exports = router
