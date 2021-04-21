const express = require('express');
const app = express();
const port = 3000;

// Serve static content
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello world!'); // This will never be executed because of app.use(express.static('public'));
});

app.get('/example', (req, res) => {
  res.send('Example');
});

app.get('*', (req, res) => {
  // res.send('Page not found');
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`App listening at ${port}`);
});