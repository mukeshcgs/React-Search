
// Dependencies
var express = require('express');
var mongodb = require('mongodb');
var bodyParser = require('body-parser');


// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB
const dbUrl = 'mongodb://localhost/company';
mongodb.MongoClient.connect(dbUrl, function (err, db) {

    app.get('/api/users', (req, res) => {
        db.collection('users').find({}).toArray((err, docs) => {
            res.json({ docs });
        })
    })
    // Start server
    app.listen(8080, () => console.log('API is running on port 8080'));

})





