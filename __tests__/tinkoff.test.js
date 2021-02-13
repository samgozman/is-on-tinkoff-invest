const {
    getTinkoffStocks,
    getTinkoffEtfs,
    getTinkoffBonds,
    getTinkoffCurrencies,
    getTinkoffAllQuotes
} = require('..')

jest.setTimeout(50000)

test('Should get Stocks', async () => {
    const stocks = await getTinkoffStocks()
    expect(stocks.length).toBeGreaterThan(0)
})

test('Should get ETFS', async () => {
    const etfs = await getTinkoffEtfs()
    expect(etfs.length).toBeGreaterThan(0)
})

test('Should get Bonds', async () => {
    const bonds = await getTinkoffBonds()
    expect(bonds.length).toBeGreaterThan(0)
})

test('Should get Currencies', async () => {
    const currencies = await getTinkoffCurrencies()
    expect(currencies.length).toBeGreaterThan(0)
})

test('Should get all Quotes', async () => {
    const quotes = await getTinkoffAllQuotes()
    expect(quotes.length).toBeGreaterThan(0)
})
