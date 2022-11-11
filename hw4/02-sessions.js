const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
app.use(
  session({
  store: new session.MemoryStore(),
  secret: 'a secret to sign the cookie',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 86400000,
  },
})
);

app.get('*', (req, res) => {
  // Add your code here
  res.status(200);
  res.set({'Content-Type': 'text/plain'});
  if (req.session.visit === undefined){
    req.session.visit = [];
    req.session.visit.push('/');
    res.write('Current route: ')
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
