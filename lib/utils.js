const got = require('got')
const cheerio = require('cheerio')

const getPage = async (url = '', searchParams = {}) => {
    try {
        const response = await got(url, {
            searchParams
        })
        return response.body
    } catch (error) {
        return ''
    }
}

const getTable = (dom) => {
    if (!dom) throw new Error('Tinkoff is unavalible')
    const $ = cheerio.load(dom)
    const table = $('table').first().find('tbody').first().find('tr')

    return table
}

const parseTable = (table) => {
    const $ = cheerio
    let tableObjArray = Array.prototype.map.call(table, (tr) => {
        return {
            quote: $(tr).find('td:nth-child(1) > a > span > div > div > div > div:nth-child(2) > div > div:nth-child(2)').text(),
            name: $(tr).find('td:nth-child(1) > a span[data-qa-file="NameColumn"]').text()
        }
    })

    return tableObjArray
}

const getAvailable = async (url = 'https://www.tinkoff.ru/invest/stocks') => {
    try {
        stocksDOM = await getPage(url, {
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
    getPage,
    getTable,
    parseTable,
    getAvailable
}