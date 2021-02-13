const {
    getAllStocks,
    getAllEtfs,
    getAllBonds,
    getAllCurrencies
} = require('./lib/tinkoff')

const main = async () => {
    const result = await getAllEtfs()
    console.log(result)
}

main()