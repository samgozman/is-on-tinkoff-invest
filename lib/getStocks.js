const cheerio = require('cheerio')
const {
    getPage,
    getTable,
    parseTable
} = require('./utils')

const getAllStocks = async () => {
    try {
        stocksDOM = await getPage('https://www.tinkoff.ru/invest/stocks', {
            country: 'All',
            orderType: 'Asc',
            sortType: 'ByName',
            start: 0,
            end: 10000
        })

        const table = getTable(stocksDOM)
        return parseTable(table)
    } catch (error) {
        return {
            error: error.message
        }
    }
}

module.exports = {
    getAllStocks
}