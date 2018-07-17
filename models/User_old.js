const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	// // id: autoIncrement,
	// _id: Number,
	id: String,
	email: {
  		type: String,
  		unique: true,
  		required: true
  	},
	password: String,
	password2: String,
	resetPasswordToken: String,
	resetPasswordExpires: Date,
})

const customerSchema = new Schema({
  // _id: Number,
  id: String,
  email: String,
  bank_account: String,
  phone: String,
  address: [{
    street: String,
    city: String,
    state: String,
    country: String
  }]
})


userSchema.methods.hashPassword = (password, password2) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(AutoIncrement);

mongoose.model('users', userSchema);
mongoose.model('customers', customerSchema);

