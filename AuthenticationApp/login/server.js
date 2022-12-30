//Add dependencies
const express = require("express"); // server software
const bodyParser = require("body-parser"); // parser middleware
const session = require("express-session"); // session middleware
const passport = require("passport"); // authentication
const connectEnsureLogin = require("connect-ensure-login"); //authorization

const User = require("./user.js"); // User Model

const app = express();

//Configuring sessions middleware
app.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  })
);

//Configuring more middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

//Passport local strategy
passport.use(User.createStrategy());

//To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Route to homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

//Route to login
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

//Route to dashboard only accessible to logged-in users
app.get("/dashboard", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
   and your session expires in ${req.session.cookie.maxAge} 
   milliseconds.<br><br>
   <a href="/logout">Log Out</a><br><br>
   <a href="/secret">Logged In Users Only</a>`);
});

//Route to secret only accessible to logged-in users
app.get("/secret", connectEnsureLogin.ensureLoggedIn(), (req, res) => {
  res.sendFile(__dirname + "/static/secret-page.html");
});

// Route to Log out
app.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

//Login POST route
app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  function (req, res) {
    console.log(req.user);
    res.redirect("/dashboard");
  }
);

//Assigning port
const port = 3000;
app.listen(port, () => console.log(`This app is listening on port ${port}`));
