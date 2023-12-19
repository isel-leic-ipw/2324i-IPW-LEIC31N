//Exemplo simples de função registo e autenticacão de utilizadores a aplicação com uso de passport...

//Install pacotes necessários, incluindo o passport, passport-local, elasticsearch, e express.

npm install express elasticsearch passport passport-local


// Configurar a Conexão com o Elasticsearch: um módulo (exemplo: elasticsearch.js) para configurar  conexão com Elasticsearch.

const { Client } = require('@elastic/elasticsearch');

const elasticClient = new Client({ node: 'http://localhost:9200' });

module.exports = elasticClient;


//Configurar  Passport para utilizar estratégia local e armazenar informações do utilizador no Elasticsearch.

//também criar visualizações necessárias (exemplo: register.ejs e login.ejs) para formulários de registo e login. 

//Configurar Rotas para Registo e Autenticação, login e logout....

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const elasticClient = require('./elasticsearch');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const newUser = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    await elasticClient.index({
      index: 'users',
      body: newUser,
    });

    res.redirect('/login');
  } catch (error) {
    console.error('Error creating user:', error);
    res.redirect('/register');
  }
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
}));

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//modulo passport

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const elasticClient = require('./elasticsearch');

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const { body } = await elasticClient.search({
        index: 'users',
        body: {
          query: {
            match: { username },
          },
        },
      });

      const user = body.hits.hits[0];

      if (!user || user._source.password !== password) {
        return done(null, false);
      }

      return done(null, user._source);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser(async (username, done) => {
  try {
    const { body } = await elasticClient.search({
      index: 'users',
      body: {
        query: {
          match: { username },
        },
      },
    });

    const user = body.hits.hits[0];

    if (user) {
      return done(null, user._source);
    }

    return done(new Error('User not found'));
  } catch (error) {
    return done(error);
  }
});
