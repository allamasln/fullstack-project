const { Country } = require('../models/country')

const getAll = async (req, res) => {
	res.send('getAll')
}

const getOne = async (req, res) => {
	res.send('getOne')
}

const create = async (req, res) => {
	res.send('create')
}

const update = async (req, res) => {
	res.send('update')
}

const deleteOne = async (req, res) => {
	res.send('deleteOne')
}

module.exports = { getAll, getOne, create, update, deleteOne }
