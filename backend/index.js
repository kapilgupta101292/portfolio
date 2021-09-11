const express = require('express');
const server = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(`${process.env.DB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
}, (err) => {
    if (err) console.error(err);
    else console.log('Connected to DB!');
});

const portfolioRoutes = require('./routes/portfolios');

server.get('/test', (req, res) => {
    return res.json({message: 'test is working!'});
})

server.use('/api/v1', portfolioRoutes);


const PORT = parseInt(process.env.PORT, 10) || 3001;
server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log('Server ready on port ', PORT);
})

