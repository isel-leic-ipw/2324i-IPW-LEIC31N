app.post('/login/password',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/~' + req.user.username);
  });


/* By (2023) https://www.passportjs.org/concepts/authentication/middleware/    */