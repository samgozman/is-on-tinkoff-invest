const cheerio = require('cheerio')
const {
    getAvailable
} = require('./utils')

const getAllStocks = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/stocks')
    } catch (error) {
        return {
            error: error.message
        }
    }
}

const getAllEtfs = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/etfs')
    } catch (error) {
        return {
            error: error.message
        }
    }
}

const getAllBonds = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/bonds')
    } catch (error) {
        return {
            error: error.message
        }
    }
}

const getAllCurrencies = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/currencies')
    } catch (error) {
        return {
            error: error.message
        }
    }
}

module.exports = {
    getAllStocks,
    getAllEtfs,
    getAllBonds,
    getAllCurrencies
}