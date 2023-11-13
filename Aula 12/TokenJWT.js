/* npm install passport passport-jwt

/*É necessário configurar uma estratégia de autenticação e definir como o Passport.js
 vai verificar os tokens JWT.

 ////
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret-key'
};

passport.use(new JwtStrategy(options, (payload, done) => {
  User.findById(payload.sub)
    .then(user => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch(err => done(err, false));
}));


/*1- Configurar o Passport.js para utilizar o JWT*/
/*
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_jwt_secret'
};

passport.use(new JwtStrategy(options, (payload, done) => {
  // Find the user in the database and return it
  // Call done() with an error if the user doesn't exist
  done(null, user);
}));

*/

/*2- Criar uma rota para autenticação*/

/*
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  // Authenticate the user
  const user = { id: 1, name: 'John Doe' };

  // Generate a JWT
  const token = jwt.sign(user, 'your_jwt_secret');

  // Return the token to the client
  res.json({ token });
});

*/

/*Proteger rotas que precisam de autenticação*/

const passport = require('passport');

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'This is a protected route' });
});
