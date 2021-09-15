
const { portfolios } = require('./data');
//const mongoose = require('mongoose');
const Portfolio = require('../models/portfolio');


class FakeDB {
    async clean() {
        await Portfolio.deleteMany({});
    }
    async addData() {
        await Portfolio.create(portfolios);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }
}

module.exports = new FakeDB();