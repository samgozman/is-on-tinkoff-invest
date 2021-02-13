const {
    getAllStocks
} = require('./lib/getStocks')

const main = async () => {
    const result = await getAllStocks()
    console.log(result)
}

main()