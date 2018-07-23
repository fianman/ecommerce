const passport = require('passport')
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Customer = mongoose.model('customers');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  // CONTROLLER
  const instagramController = require('../controllers/instagramController')()
  const youtubeController = require('../controllers/youtubeController')()
  const snapController = require('../controllers/snapController')()

  //USERS
  app.get('/api/current_user', (req, res) => {
    if (!req.user) res.send("Please log in first");
    else res.send(req.user);
  });

  // detail profile
  app.get('/api/current_profile', requireLogin, async (req, res) => {
    var send = {};

    if (req.user) {
      if (req.user.id) {
        const user = await User.findOne({ id: req.user.id })
        const customer = await Customer.findOne({ id: user.id })
        send = {
          user: user,
          customer: customer
        }
      } else if (req.user.email) {
        const user = await User.findOne({ email: req.user.email })
        const customer = await Customer.findOne({ email: user.email })
        send = {
          user: user,
          customer: customer
        }
      }
    }
    res.send(send)
    
  })

  app.post('/api/profile', (req, res) => {
    if (req.user.id) {
      User.findOne({ id: req.user.id })
        .then((user) => {
          user.firstname = req.body.first_name;
          user.lastname = req.body.last_name;
          user.save();
          Customer.findOne({ id: user.id })
            .then((customer) => {
              if (!customer) {
                customer = new Customer()
              }
            
              customer.id = user.id;
              customer.phone = req.body.phone;
              customer.address1 = req.body.address1;
              customer.address2 = req.body.address2;
              customer.address3 = req.body.address3;
              customer.address4 = req.body.address4;
              customer.street = req.body.street;
              customer.city = req.body.city;
              customer.state = req.body.state;
              customer.country = req.body.country;
              customer.bank_account = req.body.bank_account;
              customer.hanya_mau = req.body.hanya_mau;
              customer.tidak_mau = req.body.tidak_mau;
              customer.sakit = req.body.sakit;
              customer.vegetarian = req.body.vegetarian;
              customer.save();
            })
        })
    } else if (req.user.email) {
      User.findOne({ email: req.user.email })
        .then((user) => { 
          user.firstname = req.body.first_name;
          user.lastname = req.body.last_name;
          user.save();
          console.log('email user:',user.email);
          Customer.findOne({ email: user.email })
            .then((customer) => {
              if (!customer) {
                customer = new Customer()
              }
              
              customer.email = user.email;
              customer.phone = req.body.phone;
              customer.address1 = req.body.address1;
              customer.address2 = req.body.address2;
              customer.address3 = req.body.address3;
              customer.address4 = req.body.address4;
              customer.street = req.body.street;
              customer.city = req.body.city;
              customer.state = req.body.state;
              customer.country = req.body.country;
              customer.bank_account = req.body.bank_account;
              customer.hanya_mau = req.body.hanya_mau;
              customer.tidak_mau = req.body.tidak_mau;
              customer.sakit = req.body.sakit;
              customer.vegetarian = req.body.vegetarian;
              customer.save();
            })
        })
    }
    res.redirect('/menu_profile')
  })

  //=> Get yourself profile data
  app.get('/api/instagram/users/self', requireLogin, instagramController.getYourself);
  //=> Get yourself media
  app.get('/api/instagram/users/self/media', requireLogin, instagramController.getYourselfMedia);

  //=> Get Youtube subscription list
  app.get('/api/subscriptions', requireLogin, youtubeController.getSubscription);

  // Payment
  app.post('/api/payment', requireLogin, snapController.getPaymentToken);

}
