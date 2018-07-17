const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');
const passportLocalMongoose = require('passport-local-mongoose');

const customerSchema = new Schema({
  // _id: Number,
  email: String,
  bank_account: String,
  phone: String,
  address: [{
    street: String,
    city: String,
    state: String,
    country: String
  }],
  user_id: [
      {type: Schema.Types.ObjectId, ref: 'users'}
    ]
})

// customerSchema.plugin(AutoIncrement);

module.exports = mongoose.model('customers', customerSchema);