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
app.get('/favicon.ico', (req, res) => {
  res.end();
});
app.get('*', (req, res) => {
  // Add your code here
  res.status(200);
  res.set({'Content-Type': 'text/html'});
  if (req.session.visit === undefined){
    req.session.visit = [];
    req.session.visit.push('/');
    res.send(`Current route: /  \n Welcome to http://localhost:${port}`);
  }
  else{
    const curr_route = req.originalUrl;
    req.session.visit.push(req.url);
    res.write(`<div> Currently on route: ${curr_route} </div>`);
    res.write(`<h4> previously visited :</h4>`);
    res.write(`<ul>`);
    let list = ``;
    req.session.visit.forEach(
      (element) => (list += `<li> ${element}</li>`)
    );
    res.write(list);
    res.write(`</ul>`);
      
    }
    res.end();
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
