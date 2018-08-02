const passport = require('passport')
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Customer = mongoose.model('customers');
const _ = require('lodash')
const async = require('async');
const crypto = require('crypto');
const bcrypt = require('bcrypt-nodejs');
const nodemailer = require('nodemailer');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  //AUTH
  app.get('/auth/google', passport.authenticate('youtube'));
  app.get('/auth/instagram', passport.authenticate('instagram'));

  app.get('/auth/google/callback', passport.authenticate('youtube'),
  (req, res) => {
    res.redirect('http://localhost:3000/edit_profile');
  })

  app.get('/auth/instagram/callback', passport.authenticate('instagram'),
  (req, res) => {
    res.redirect('http://localhost:3000/edit_profile');
  });

  // sign up
  app.post('/auth/check', async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) { res.send(true) }
    else { res.send(false) }
  })

  app.post('/auth/register', async (req, res) => {
    var user = await User.findOne({ email: req.body.email })
    if (!user) {
      user = new User();
      user.id = bcrypt.hashSync(_.uniqueId(), bcrypt.genSaltSync(8))
      user.username = req.body.username;
      user.firstname = req.body.first_name;
      user.lastname = req.body.last_name;
      user.email = req.body.email;
      user.password = user.hashPassword(req.body.password);
      user.password2 = user.hashPassword(req.body.password2);
      user.save();
      var customer = new Customer();
      customer.id = user.id;
      customer.phone = req.body.phone;
      customer.bank_account = req.body.bank_account;
      customer.address1 = req.body.address1;
      customer.address2 = req.body.address2;
      customer.address3 = req.body.address3;
      customer.address4 = req.body.address4;
      customer.city = req.body.city;
      customer.street = req.body.street;
      customer.country = req.body.country;
      customer.states = req.body.states;
      customer.hanya_mau = req.body.hanya_mau;
      customer.tidak_mau = req.body.tidak_mau;
      customer.sakit = req.body.sakit;
      customer.vegetarian = req.body.vegetarian;
      customer.save();
    } else {
      req.flash('error', "Account already exist")
      res.redirect('/login');
    }

    req.login(user, () => res.redirect('/menu_profile'))
  })

  // sign in
  app.post('/auth/login',
    passport.authenticate('local',{
      successRedirect : '/menu_profile',
      failureRedirect : '/login',
      failureFlash : "Incorrect email or password"
    })
  )
  app.get('/auth/login', (req, res) => {
    res.redirect('/login')
  })
  app.get('/auth/flash/error', (req, res) => {
    res.send(req.flash('error'))
  })
  app.get('/auth/flash/info', (req, res) => {
    res.send(req.flash('info'))
  })

  //LOGOUT
  app.get('/auth/logout',(req, res) => {
      console.log('logout success');
      req.logout();
      res.redirect('/')
  });

  // forgot password
  app.get('/auth/forgot', (req, res) => {
      res.redirect('/forgot');
  });

  app.post('/auth/forgot', (req, res, next) => {
      async.waterfall([
        function(done){
          crypto.randomBytes(20, function(err, buf){
            var token = buf.toString('hex');
            done(err, token);
          })
        },
        function(token, done){
          User.findOne({ email: req.body.email}, function(err, user){
            if(!user){
              req.flash('error', 'No account with that email address exists.');
              return res.redirect('/forgot');
            }

            user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000;

            user.save(function(err){
              done(err, token, user);
            });

          });
        },// Setup mail configuration
        function(token, user, done){
          var smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: 'fianpress@gmail.com',
              pass: 'fian_press24'
            }
            // auth: {
            //     XOAuth2: {
            //         user: "fianpress@gmail.com", // Your gmail address.
            //         clientId: "477460994669-udpadsuqcv0850s63dq8jgundunfajq8.apps.googleusercontent.com",
            //         clientSecret: "qSsTtasBoQ9yPgFU9paSGXev",
            //         refreshToken: "1/Ttr_tM7Cmsz7yOYyJSs4ysKiEp9RX1FUkLP974_doMI"
            //     }
            // }
          });
          // Setup mail configuration
          var mailOptions = {
            to: user.email,
            from: 'fianpress@gmail.com',
            subject: 'Password Reset',
            text: 'You are receiving this because you have requested the reset of the password' +
                  'Please click on the following link, or paste this into your browser to complete the process:\n\n ' +
                  'http://localhost:5000/reset/' + token + '\n\n' +
                  'If you did not request this, please ignore this email and your password will remain unchange.'
            //html: htmlBody
          };
          // send mail
          smtpTransport.sendMail(mailOptions, function(err){
            if(err){
              console.log(err);
            }else{
              console.log('mail sent');
              req.flash('info', 'An email has been sent to ' + user.email + ' with further instructions.');
              res.redirect('/forgot')
            }
          });
        }, function(err){
              if(err){
                return next(err);
              }
              res.redirect('/forgot');
           }
      ]);
  });

  app.get('/reset/:token', function(req, res){
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now()}}, function(err, user){
      if(!user){
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/forgot');
      }
      // res.render('reset', {token: req.params.token});
      // res.render('reset', {
      //   user: req.user
      // });
      res.redirect('http://localhost:3000/reset/'+req.params.token);
    });
  });

  app.post('/reset/:token', function(req, res){
    async.waterfall([
      function(done){
        User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now()}}, function(err, user){

          if(!user){
            req.flash('error', 'Password reset token is invalid or has expired.');
            return res.redirect('/forgot');
          }
          // if(req.body.password === req.body.password2){
          //   user.setPassword(req.body.password, function(err){
          //     user.resetPasswordToken = undefined;
          //     user.resetPasswordExpires = undefined;

          //     user.save(function(err){
          //       req.login(user, function(err){
          //         done(err, user);
          //       });
          //     });
          //   });
          // }else{
          //   req.flash('error', 'Password do not match.');
          //   return res.redirect('/forgot');
          // }
          
            user.password = user.hashPassword(req.body.password);
            user.password2 = user.hashPassword(req.body.password2);
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            user.save(function(err) {
              req.logIn(user, function(err) {
                done(err, user);
                console.log('Your password has been changed');
                res.redirect('/');
              });
            });
        });
      },
      function(user, done){
        var smtpTransport = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'fianpress@gmail.com',
            pass: 'fian_press24'
          }
        });
        var mailOptions = {
          to: user.email,
          from: 'fianpress@gmail.com',
          subject: 'Your password has been changed',
          text: 'Hello, \n\n' +
                'This is a confirmation that the password for your account ' + user.mail + ' has just been changed.\n'
        };

        smtpTransport.sendMail(mailOptions, function(error){
          req.flash('info', 'Success, Your password has been changed.');
          done(err);
        });
      }

    ], function(err){
        res.redirect('/');
      });
  });
}
