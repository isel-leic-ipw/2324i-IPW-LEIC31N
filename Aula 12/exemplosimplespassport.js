const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const app = express();

// Configuração do Passport
passport.use(new LocalStrategy(
  (username, password, done) => {
    // Aqui, normalmente, você faria uma verificação em sua base de dados
    // para encontrar o utilizador com o nome de utilizador fornecido e verificar a palavra passe
    if (username === 'usuario' && password === 'password') {
      return done(null, { username: 'utilizador' });
    } else {
      return done(null, false, { message: 'Nome de utilizador ou pass incorretos.' });
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  // Aqui, normalmente, deve buscar os detalhes do utilizador na base de dados
  done(null, { username: username });
});

// Configuração da aplicação
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secreto', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Rotas
app.get('/', (req, res) => {
  res.send('<h1>Home</h1><p><a href="/login">Login</a></p>');
});

app.get('/login', (req, res) => {
  res.send('<h1>Login</h1><form action="/login" method="post"><div><label>Nome de usuário:</label><input type="text" name="username" required></div><div><label>Senha:</label><input type="password" name="password" required></div><div><button type="submit">Entrar</button></div></form>');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/perfil',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/perfil', isAuthenticated, (req, res) => {
  res.send(`<h1>Perfil</h1><p>Bem-vindo, ${req.user.username}!</p><p><a href="/logout">Logout</a></p>`);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});


/* Este exemplo usa o Express como framework web e o Passport para a autenticação, não esqueça antes de install as dependecias comando: npm install express passport passport-local express-session */
