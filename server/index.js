const express = require('express'),
      server = express(),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      { resolve } = require('path');

server.use([
  express.static(resolve(__dirname, '..', 'dist')),
  morgan('dev'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
]);

server.use('/assets', express.static(resolve(__dirname, '..', 'assets')));

server.get('/', (req, res) => res.sendFile('index.html'));

const port = process.env.PORT || 3000;
server.listen(port, console.log(`listening on port ${port}`));