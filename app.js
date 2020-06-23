
const express = require('express');
const app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.get(['/home','/'], (req, res) => {
	res.sendFile(path.join(__dirname+'/home1.html'));
})

app.get('/predict', (req, res) =>{
	res.sendFile(path.join(__dirname+'/predict.html'));
})

app.get('/about', (req, res) =>{
	res.sendFile(path.join(__dirname+'/about.html'));
})

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');