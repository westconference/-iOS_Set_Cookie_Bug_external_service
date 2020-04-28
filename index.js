const express = require('express')
const app = express()
const port = 4000
const https = require('https');
const fs = require('fs');
const path = require('path');

app.get('/landing', (req, res) => {
  let returnUrl = req.query.returnUrl;
	res.header('Set-Cookie', 'ReturnURL=' + returnUrl + '; Max-Age=60');
	res.sendFile(path.join(__dirname + '/src/landing.html'));
})

app.get('/read', (req, res) => {
	res.sendFile(path.join(__dirname + '/src/read.html'));
})

https.createServer({
  key: fs.readFileSync('certs/server.key'),
  cert: fs.readFileSync('certs/server.cert')
}, app).listen(port, () => {
  console.log('Listening on port ' + port)
})