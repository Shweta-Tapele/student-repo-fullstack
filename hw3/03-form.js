const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered
const server = http.createServer((req, res) => {
const formpage = `<form action="/submit" method="post" id="submission">
Username: <input name="username id="username"><br>
Email: <input name="email" id="email"><br>
Comments: <input name="comments" id=comments><br>
Newsletter: <input name="newsletter" type="checkbox" id="accept">
<input type="submit">
</form>`; 

if(req.url === '/form'){
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(formpage);
  res.end();
}
else if(req.url === '/submit'){
  res.writeHead(200, { "Content-Type": "text/html" });
  username = formpage.match("username");
        email = formpage.match("email");
        comments = formpage.match("comments");
        newsletter = formpage.match("newsletter");
        res.write('<h1> Submission Results: <h1>');
        res.write(`<h3> Username: ${username} <h2>`);
        res.write(`<h3> Email: ${email} <h2>`);
        res.write(`<h3> Comments: ${comments} <h2>`);
        if(newsletter != false)
        {
          res.write(`<h2> Newsletter: Yes,sign me up for the news letter.<h2>`);
        }
        else
        {
          res.write('<h2> Newsletter: No, Thank you<h2>');
        }
        res.end();
        }
      });
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
