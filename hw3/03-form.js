const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered
const server = http.createServer((req, res) => {
const formHTML = `<form action="/submit" method="post" id="submission">
Username: <input name="username id="username"><br>
Email: <input name="email" id="email"><br>
Comments: <input name="comments" id=comments><br>
Newsletter: <input name="newsletter" type="checkbox" id="accept">
<input type="submit">
</form>`; 

if(req.url === '/form'){
  //lastPost = "";
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(formHTML);
  res.end();
}
else if(req.url === '/submit'){
  res.writeHead(200, { "Content-Type": "text/html" });
  username = formHTML.match("username");
        email = formHTML.match("email");
        comments = formHTML.match("comments");
        newsletter = formHTML.match("newsletter");
        res.write('<h1> Submission Results: <h1>');
        res.write(`<h2> Username: ${username} <h2>`);
        res.write(`<h2> Email: ${email} <h2>`);
        res.write(`<h2> Comments: ${comments} <h2>`);
        if(newsletter != false){res.write(`<h2> Newsletter: Yes <h2>`);}
        else{res.write('<h2> Newsletter: No, I dont want to signup<h2>');}
        res.end();
        }
      });
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
