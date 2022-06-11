// import the express dependency
const express = require('express');
// create express app
const app = express();
// define a variable for the port
const port = 3000;
// handle GET request on route '/'
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});