const mongoose = require('mongoose');
//const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
	id: String,
	// _id: Number,
  username: String,
  firstname: String,
  lastname: String,
	email: String,
	password: String,
	password2: String,
	resetPasswordToken: String,
	resetPasswordExpires: Date,
})

const customerSchema = new Schema({
  id: String,
  email: String,
  bank_account: String,
  phone: String,
  address1: String,
  address2: String,
  address3: String,
  address4: String,
  street: String,
  city: String,
  states: String,
  country: String,
  hanya_mau: String,
  tidak_mau: String,
  sakit: String,
  vegetarian: String,
})

userSchema.methods.hashPassword = (password, password2) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  return bcrypt.hashSync(password2, bcrypt.genSaltSync(10))
}

userSchema.methods.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

userSchema.plugin(passportLocalMongoose);
//userSchema.plugin(AutoIncrement);

mongoose.model('users', userSchema);
mongoose.model('customers', customerSchema);

