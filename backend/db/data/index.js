const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
require('../models/portfolio');
const fakeDB = require('./FakeDB');

mongoose.connect(`${process.env.DB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, async (err) => {
    if (err) console.error(err);
    else {
        console.log('> Starting populating DB');
        await fakeDB.populate();
        await mongoose.connection.close();
        console.log('> DB has been populated...')
    }
})