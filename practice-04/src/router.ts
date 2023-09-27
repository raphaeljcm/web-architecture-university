import jwt from 'jsonwebtoken';
import passport from 'passport';
import fs from 'node:fs'
import path from 'node:path'
import { Router } from 'express';
import { verifyJWT } from './middlewares/auth.js'
import { isLoggedIn } from './middlewares/loggedIn.js';

const dirname = path.resolve()
export const router = Router();

let currentId = 1

router.get('/', (req, res) => res.json({ message: "Tudo ok por aqui!" }))

router.get('/clientes', verifyJWT, (req, res) => {
  console.log(req.headers)
  return res.json([{ id: currentId, nome: `Teste user: ${currentId}` }]);
})

router.post('/login', (req, res) => {
  if (req.body.user === 'arquiteturaWeb' && req.body.password === '123') {

    const privateKey = fs.readFileSync(path.join(dirname) + '/private.key', 'utf8')
    const token = jwt.sign({ id: currentId }, privateKey, {
      expiresIn: 5000 * 60,
      algorithm: 'RS256'
    });

    currentId++

    return res.json({ auth: true, token: token });
  }

  res.status(401).json({ message: 'Login inválido!' });
})

router.post('/logout', (req, res) => {
  return res.json({ auth: false, token: null });
})

// Google Auth consent screen route
router.get('/google',
  passport.authenticate('google', {
    scope:
      ['email', 'profile']
  }
  ));

// Call back route
router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
  }),
  function (req, res) {
    res.redirect('/success')

  }
);

// failed route if the authentication fails
router.get("/failed", (req, res) => {
  console.log('User is not authenticated');
  res.send("Failed")
})

// Success route if the authentication is successful
router.get("/success", isLoggedIn, (req, res) => {
  console.log('You are logged in');
  const user = req.user as { displayName: string }
  res.send(`Welcome ${user}`)
})

// Route that logs out the authenticated user  
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('Error while destroying session:', err);
    } else {
      req.logout(() => {
        console.log('You are logged out');
        res.redirect('/home');
      });
    }
  });
});