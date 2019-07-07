module.exports = function (req, res, next) {
	// req.user
	// 401 Unathorized (неразрешенный)
	// 403 Forbidden (запрещено)
	if (!req.user.isAdmin) return res.status(403).send('Access denied.');
	next();
}