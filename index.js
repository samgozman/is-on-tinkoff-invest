const cheerio = require('cheerio')
const {
    getAvailable
} = require('./lib/utils')

/**
 * @typedef {{quote: string, name: string}} quote
 */

 /**
 * Возвращает все торгующиеся акции в тинькофф инвестициях
 * 
 * @async
 * @return {Promise.<Array.<quote>>}
 */
const getTinkoffStocks = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/stocks')
    } catch (error) {
        return {
            error: error.message
        }
    }
}

/**
 * Возвращает все торгующиеся фонды в тинькофф инвестициях
 * 
 * @async
 * @return {Promise.<Array.<quote>>}
 */
const getTinkoffEtfs = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/etfs')
    } catch (error) {
        return {
            error: error.message
        }
    }
}

/**
 * Возвращает все торгующиеся облигации в тинькофф инвестициях
 * 
 * @async
 * @return {Promise.<Array.<quote>>}
 */
const getTinkoffBonds = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/bonds')
    } catch (error) {
        return {
            error: error.message
        }
    }
}

/**
 * Возвращает все торгующиеся валютные пары в тинькофф инвестициях
 * 
 * @async
 * @return {Promise.<Array.<quote>>}
 */
const getTinkoffCurrencies = async () => {
    try {
        return await getAvailable('https://www.tinkoff.ru/invest/currencies')
    } catch (error) {
        return {
            error: error.message
        }
    }
}
/**
 * Возвращает все торгующиеся инструменты в тинькофф инвестициях (акции, облигации, фонды, валютные пары)
 * ! Функция не быстрая, тк асинхронно работает 4 парсера.
 * 
 * @async
 * @return {Promise.<Array.<quote>>}
 */
const getTinkoffAllQuotes = async () => {
    return Array.prototype.concat(await getTinkoffCurrencies(), await getTinkoffBonds(), await getTinkoffEtfs(), await getTinkoffStocks())
}

module.exports = {
    getTinkoffStocks,
    getTinkoffEtfs,
    getTinkoffBonds,
    getTinkoffCurrencies,
    getTinkoffAllQuotes
}