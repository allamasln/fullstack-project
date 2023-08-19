const mongoose = require('mongoose')

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
	borders: [String],
})

const Country = mongoose.model('Country', countrySchema)

exports.Country = Country
