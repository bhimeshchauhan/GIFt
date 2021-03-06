const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
// const http = require('http');
const hostname = '127.0.0.1';
// const port = 3000;
const twilioRouter = require('./twillio_api/main');

// Twilio Part
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/twilio',twilioRouter);

const port = process.env.PORT || 3000;
//
// //  Giphy part
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     console.log("the data is ", myModule.testRoute());
//     res.write(myModule.testRoute());
//     res.end();
// }).listen(3000);


const listener = app.listen(port, ()=> {
    console.log('Your app is listening on port ' + listener.address().port);
});
//
// server.listen(port, hostname, () => {
//     console.log("The server is running at http://",hostname,":",port);
// });
