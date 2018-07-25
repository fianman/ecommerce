module.exports = (req, res, next) => {
	if(!req.user){
		res.redirect('http://localhost:3000/login');
	}
	next();
	// if (req.isAuthenticated()) return next();
 //    res.redirect('http://localhost:3000/loginregis');
};
