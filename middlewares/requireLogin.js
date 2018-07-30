module.exports = (req, res, next) => {
	if(!req.user){
		res.status(401).send("Unauthorized: Not logged in");
	} else {
		next();
	}
};
