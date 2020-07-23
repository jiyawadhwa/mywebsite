var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello world');
})

var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on port http://localhost:${port}`));