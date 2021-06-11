// EXPRESS //

const express = require('express');
const bodyParser = require('body-parser');

// Calling express does all the server setup that would take several lines of code with raw node
const app = express();

// The use callback takes 3 params: request, response, and next; next calls the next piece of middleware.
// If you don't call next, nothing will happen after the current middleware is done.
// Using bodyParser automatically adds a next call.
app.use(bodyParser.urlencoded({ extended: false }));

// The first argument to .post or .get is the route where the action will happen.
app.post('/user', (req, res, next) => {
	res.send('<h1>User: ' + req.body.username + '</h1>');
})

app.get('/', (req, res, next) => {
	res.send('<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>');
});

app.listen(5000);
