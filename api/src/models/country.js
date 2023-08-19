const mongoose = require('mongoose')
const { body } = require('express-validator')
const createUploader = require('../utils/multer')

const countrySchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	population: { type: Number, required: true },
	region: { type: String, required: true },
	capital: { type: String, required: true },
	nativeName: { type: String, required: true },
	subregion: String,
	topLevelDomain: [String],
	currencies: { type: [String], required: true },
	languages: { type: [String], required: true },
	flag: { type: String, required: true },
	flagCloudinaryId: { type: String, required: true },
	borders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' }],
})

const Country = mongoose.model('Country', countrySchema)

const FLAG_TYPES = {
	'image/jpeg': 'jpg',
	'image/png': 'png',
}

const validateFlag = (type) => FLAG_TYPES[type]

const countryValidationSchema = [
	body('name').notEmpty().withMessage('El nombre es obligatorio'),
	body('population')
		.isNumeric()
		.withMessage('La población debe ser un número')
		.notEmpty()
		.withMessage('La población es obligatoria'),
	body('region').notEmpty().withMessage('La región es obligatoria'),
	body('capital').notEmpty().withMessage('La capital es obligatoria'),
	body('nativeName').notEmpty().withMessage('El nombre nativo es obligatorio'),
	body('subregion').optional(),
	body('topLevelDomain').optional(),
	body('currencies').notEmpty().withMessage('La moneda es obligatorias'),
	body('languages').notEmpty().withMessage('El idioma es obligatorio'),
	body('borders').optional(),
	body('flag')
		.custom((_, { req }) => req.file)
		.withMessage('La bandera es obligatorio')
		.custom((_, { req }) => validateFlag(req.file.mimetype))
		.withMessage(
			'La bandera debe estar en uno de los formatos permitidos ' +
				Object.values(FLAG_TYPES).join('/')
		),
]

exports.Country = Country
exports.upload = createUploader(validateFlag)
exports.countryValidationSchema = countryValidationSchema
