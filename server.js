const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
const app = express();
const flash        = require('req-flash');
require('js-base64');

require('./models/User');
// require('./models/Customer');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(session({ secret: 'somesecret' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());

require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);


if(process.env.NODE_ENV === 'production'){
	// Express will serve up production assets
	// like our main.js file, or main.css file
	app.use(express.static('ecommerce_react/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'ecommerce_react', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);