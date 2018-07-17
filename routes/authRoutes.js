
const passport = require('passport')
const mongoose = require('mongoose');
const User = mongoose.model('users');
const async = require('async');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  //AUTH
  app.get('/auth/google', passport.authenticate('youtube'));
  app.get('/auth/instagram', passport.authenticate('instagram'));
  
  app.get('/auth/google/callback', passport.authenticate('youtube'),
  (req, res) => {
    res.redirect('http://localhost:3000');
  })

  app.get('/auth/instagram/callback', passport.authenticate('instagram'),
  (req, res) => {
    res.redirect('http://localhost:3000');
  });

  // sign up
  app.post('/auth/register', (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {  
        if (!user) {
          user = new User();
          user.username = req.body.username;
          user.firstname = req.body.first_name;
          user.lastname = req.body.last_name;
          user.email = req.body.email;
          user.password = user.hashPassword(req.body.password);
          user.password2 = user.hashPassword(req.body.password2);
          user.save();
        } else {
          console.log("Akun sudah ada");
          res.redirect('/loginregis');
          
        }
        req.login(user, () => {return res.redirect('/profile') })
      })
  })

  // sign in
  app.post('/auth/login', passport.authenticate('local', { failureRedirect: '/loginregis' }),(req, res) => {
      console.log('success');
      res.redirect('http://localhost:3000/menu_profile')
  })

  //LOGOUT
  app.get('/auth/logout',(req, res) => {
      console.log('logout success');
      req.logout();
      req.flash("success", "See you later!");
      res.redirect('/')
  });

  // forgot password
  app.get('/auth/forgot',requireLogin, (req, res) => {
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
              req.flash('error', 'No account with that email addresss exists.');
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
              req.flash('info', 'An email has been sent to' + user.email + 'with further instructions.');
              done(err, 'done');
              

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

  app.get('/reset/:token', requireLogin, function(req, res){
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
          req.flash('success', 'Success, Your password has been changed.');
          done(err);
        });
      }

    ], function(err){ 
        res.redirect('/');
      });
  });
}
