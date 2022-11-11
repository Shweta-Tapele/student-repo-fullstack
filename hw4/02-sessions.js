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
    res.send(`Current route: /  \n Welcome First timer`);
  }
  else{
    const curr_route = req.originalUrl;
    res.write(`<div> Currently on route: ${curr_route} </div>`);
    res.write(`<h4> previously visited :</h4>`);
    res.write(`<ul>`);
    let list = ``;
    req.session.visit.forEach(
      (element) => (list += `<li> ${element}</li>`)
    );
    res.write(list);
    res.end();
      
    }
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
