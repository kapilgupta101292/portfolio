import axios from 'axios';

class PortfolioApi {
    getAll() {
        return axios.get('https://3001-coffee-bee-14ca4khn.ws-us15.gitpod.io/api/v1/portfolios')
    }
}

export default PortfolioApi;