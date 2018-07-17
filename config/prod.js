// prod.js - production keys here
module.exports = {
	// google
	googleClientID : process.env.GOOGLE_CLIENT_ID,
	googleClientSecret : process.env.GOOGLE_CLIENT_SECRET,
	googleMapID: process.env.GOOGLE_MAP_ID,
	// instagram
	iyClientID : process.env.IY_CLIENT_ID,
	iyClientSecret : process.env.IY_CLIENT_SECRET,
	// mongo
	mongoURI : process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY,
	// stripe
	stripePublishableKey : process.env.STRIPE_PUBLISHABLE_KEY,
	stripeSecretKey : process.env.STRIPE_SECRET_KEY,
	sendGridKey: process.env.SEND_GRID_KEY,
	redirectDomain: process.env.REDIRECT_DOMAIN

	// sent email
	emailClientID: process.env.EMAIL_CLIENT_ID,
	emailClientSecret: process.env.EMAIL_CLIENT_SECRET,
	refreshTokenEmail: process.env.REFRESH_TOKEN_EMAIL

};

