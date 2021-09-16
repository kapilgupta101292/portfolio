const express = require('express');
const server = express();
const { connect } = require('./db');

const portfolioRoutes = require('./routes/portfolios');

async function run() {
    await connect();

    server.use('/api/v1/portfolios', portfolioRoutes);


    const PORT = parseInt(process.env.PORT, 10) || 3001;
    server.listen(PORT, (err) => {
        if (err) console.error(err);
        console.log('Server ready on port ', PORT);
    })

}

run();
