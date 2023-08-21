module.exports = function (req, res, next) {
	const { isAdmin } = req.user

	if (!isAdmin) res.status(403).json({ message: 'Acceso prohibido' })

	next()
}
