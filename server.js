var express = require('express');

var app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/html/index.html');
})

app.get('/:page', (req, res) => {
    res.sendFile(__dirname+'/public/html/'+req.params.page +".html");
})

var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on port http://localhost:${port}`));