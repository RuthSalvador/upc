
const express = require('express');
const app = express();


app.use('/', express.static('public'));

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), ()=> {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/rutasMo', function (req, res) {
    var questions = api.questions();
    questions.then( (result) => {
        res.status(200).json(result);
    });
});

app.get('/rutasSis', function (req, res) {
    var questions = api.rutasSis();
    questions.then( (result) => {
        res.status(200).json(result);
    });
});

app.get('/upcMonterrico', function (req, res) {
    var questions = api.upcMonterrico();
    questions.then( (result) => {
        res.status(200).json(result);
    });
});

app.get('/upcSanMiguel', function (req, res) {
    var questions = api.upcSanMiguel();
    questions.then( (result) => {
        res.status(200).json(result);
    });
});

app.get('/upcSis', function (req, res) {
    var questions = api.upcSis();
    questions.then( (result) => {
        res.status(200).json(result);
    });
});

app.get('/upcVilla', function (req, res) {
    var questions = api.upcVilla();
    questions.then( (result) => {
        res.status(200).json(result);
    });
});
