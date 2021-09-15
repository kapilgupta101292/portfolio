const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
require('./models/portfolio');


exports.connect = () => {

    return mongoose.connect(`${process.env.DB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
    if (err) console.error(err);
    else console.log('Connected to DB!');
    });
}