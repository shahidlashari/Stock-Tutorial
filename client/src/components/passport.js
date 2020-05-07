var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

const localOption = { usernameField: `email` };

const localLogin = new LocalStrategy(localOption, async (email, password, done) => {

  try {
    const user = await user.findOne({ email });

    if (!user) { return done(null, false); }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) { return done(null, false); }

    return done(null, user);
  } catch (e) {
    return (e);
  }

});

passport.use(jwtLogin);

passport.use(localLogin);