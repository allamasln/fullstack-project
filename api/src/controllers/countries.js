const cloudinary = require('../utils/cloudinary')

const { Country } = require('../models/country')

const getAll = async (req, res) => {
	let { region, search, limit = 1000, offset = 0 } = req.query

	let filter = {}

	if (search) filter.name = { $regex: '.*' + search + '.*' }
	if (region) filter.region = region

	const countries = await Country.find(filter).limit(limit).skip(offset)

	res.json(countries)
}

const getOne = async (req, res) => {
	const country = await Country.findById(req.params.countryId)

	if (!country) return res.status(404).json({ message: 'País no encontrado' })

	res.json(country)
}

const create = async (req, res) => {
	const { path: flag, filename: flagCloudinaryId } = req.file

	const newCountry = await Country.create({
		...req.body,
		flag,
		flagCloudinaryId,
	})

	res.json(newCountry)
}

const update = async (req, res) => {
	const { path: flag, filename: flagCloudinaryId } = req.file
	const { countryId } = req.params

	const updates = { ...req.body, flag, flagCloudinaryId }
	const oldCountry = await Country.findByIdAndUpdate(countryId, updates)

	if (!oldCountry)
		return res.status(404).json({ message: 'País no encontrado' })
	const updatedCountry = { countryId, ...updates }

	await cloudinary.uploader.destroy(oldCountry.flagCloudinaryId, {
		invalidate: true,
	})

	res.json(updatedCountry)
}

const deleteOne = async (req, res) => {
	const deletedCountry = await Country.findByIdAndDelete(req.params.countryId)

	if (!deletedCountry)
		return res.status(404).json({ message: 'País no encontrado' })

	await cloudinary.uploader.destroy(deletedCountry.flagCloudinaryId, {
		invalidate: true,
	})

	res.json(deletedCountry)
}

module.exports = { getAll, getOne, create, update, deleteOne }
