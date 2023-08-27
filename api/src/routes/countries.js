const { Router } = require('express')

const countryController = require('../controllers/countries')
const { upload } = require('../models/country')

const { query } = require('express-validator')
const { countryValidationSchema } = require('../models/country')
const validateParamId = require('../utils/validateParamId')
const validate = require('../middlewares/validate')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const router = Router()

router.get(
	'/',
	query('limit').isNumeric().withMessage('Limit debe ser un número').optional(),
	query('offset').isNumeric().withMessage('Offset debe ser un número').optional(),
	validate,
	countryController.getAll
)
router.get('/:countryId', validateParamId('countryId'), validate, countryController.getOne)
router.post(
	'/',

	upload.single('flag'),
	countryValidationSchema,
	validate,
	countryController.create
)

router.put(
	'/:countryId',
	[auth],
	validateParamId('countryId'),
	upload.single('flag'),
	countryValidationSchema,
	validate,
	countryController.update
)
router.delete(
	'/:countryId',
	[auth, admin],
	validateParamId('countryId'),
	validate,
	countryController.deleteOne
)

module.exports = router
