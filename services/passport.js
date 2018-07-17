const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const YoutubeV3Strategy = require('passport-youtube-v3').Strategy
const InstagramStrategy = require('passport-instagram').Strategy
const LocalStrategy = require('passport-local').Strategy;
const keys = require ('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); // import collection users from database

passport.serializeUser((user, done)=> {
	done(null,user);
});
// passport.deserializeUser((id, done)=> {
// 	User.findById(id)
// 		.then(user=> {
// 			done(null, user);
// 		})
// });
passport.deserializeUser(function(data, done) {
  done(null, data);
});

passport.use(new GoogleStrategy({
	clientID : keys.googleClientID,
	clientSecret : keys.googleClientSecret,
	callbackURL : '/auth/google/callback',
	proxy : true	
	}, 
	async (accessToken, refreshToken, profile, done) => {
		const existingUser = await User.findOne({ id: toString(profile.id)})
			if(existingUser){
				// we already have a record with the given profile ID
				return done(null, existingUser);
			}
				// we don't have a user record with this ID, make a new record
				const user = await new User ({ id: profile.id }).save()
					return done(null, user);
				
	})
);

passport.use(new YoutubeV3Strategy({
	clientID : keys.googleClientID,
	clientSecret : keys.googleClientSecret,
	callbackURL : '/auth/google/callback',
	proxy : true	
	}, 
	async (accessToken, refreshToken, profile, done) => {
		console.log('data profile : ', profile );
		const existingUser = await User.findOne({ id: toString(profile.id)})
			if(existingUser){
				// we already have a record with the given profile ID
				existingUser.id = profile.id,
			    existingUser.access_token = accessToken,
			    existingUser.refresh_token = refreshToken,
			    existingUser.name = profile.displayName
			    
				return done(null, existingUser);
			}
				// we don't have a user record with this ID, make a new record
				const user = await new User ({ 
					id: profile.id, 
		          	name: profile.displayName
		          	
				}).save()
				return done(null, user);
				
	})
	
);

passport.use(new InstagramStrategy({
	clientID : keys.iyClientID,
	clientSecret : keys.iyClientSecret,
	callbackURL : 'http://localhost:5000/auth/instagram/callback/',
	proxy : true	
	},
	(accessToken, refreshToken, profile, done) => {
    User.findOne({ id: profile.id})
      .then((user) => {
        if (!user) {
        new User({
          id: profile.id
        }).save()
        }
      })
    var user = {};
    user.id = profile.id,
    user.access_token = accessToken,
    user.refresh_token = refreshToken
    return done(null, user)
  }
));

// Local Strategy
passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
  proxy: true
  },
  (username, password, done) => {
    User.findOne({ email: username})
      .then((user) => {
        if (!user) { return done(null, false) }
        if (user.comparePassword(password, user.password)) { return done(null, user) }
      })
  })
)
