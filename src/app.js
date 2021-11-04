import AXIOS from 'axios';

const BASE_URL = 'https://api.exchangerate-api.com/v4/latest/';
const AXIOS_INSTANCE = AXIOS.create({
    baseURL: BASE_URL,
    timeout: 5000
});

const getExchanges = async () => {
    let exchanges = {
        USD: 0,
        EUR: 0,
        GBP: 0

    };
    const BASE = 'BRL';
    try {
        for (let key in exchanges) {
            let response = await AXIOS_INSTANCE.get(`${key}`);
            exchanges[key] = response.data.rates[BASE];
        }
        console.log(exchanges);
    } catch (error) {
        console.log(error);
    }
};

getExchanges();
