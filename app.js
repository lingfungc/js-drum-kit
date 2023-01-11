// imports
const express = require('express')
const app = express()
const port = 3000


// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/javascript', express.static(__dirname + 'public/javascript'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/sounds', express.static(__dirname + 'public/sounds'))

// set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index', { text: 'This is EJS'} )
  // res.sendFile(__dirname + '/views/index.html')
  // res.send('Hello World')
})

app.get('/about', (req, res) => {
  res.render('about', { text: 'About Page'} )
  // res.sendFile(__dirname + '/views/index.html')
  // res.send('Hello World')
})

// listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))


// const express = require('express');
// const app = express();

// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const server = http.createServer(function(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   fs.readFile('index.html', function(error, data) {
//     if (error) {
//       res.writeHead(404);
//       res.write('Error: File not found');
//     } else {
//       res.write(data);
//     }
//     res.end();
//   })
// })

// server.listen(port, function(error) {
//   if (error) {
//     console.log('Something went wrong', error);
//   } else {
//     console.log('Server is listening on port ' + port);
//   }
// })
