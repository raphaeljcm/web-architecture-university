import express from 'express';
import session from 'express-session'
import passport from "passport";
import { Strategy } from 'passport-google-oauth2'
import * as dotenv from 'dotenv'
import { router } from './router'

dotenv.config()

passport.use(new Strategy({
  clientID: process.env.CLIENT_ID!,
  clientSecret: process.env.CLIENT_SECRET!,
  callbackURL: "http://localhost:3333/auth/google/callback",
  passReqToCallback: true
}, (request: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
  return done(null, profile);
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user as any);
});

const app = express()
app.use(router)
app.use(session({
  secret: process.env.SECRET!,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())

app.listen(process.env.PORT, () => console.log('Server is running on port: ' + process.env.PORT));