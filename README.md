# is-on-tinkoff-invest
Возвращает список ценных бумаг, доступных для приобретения на Тинькофф Инвестициях.

Скрипт работает медленно, так как парсит тяжёлые страницы. Делал его для своего проекта, где данный пакет запускается раз в сутки. 

## Установка
Установите пакет при помощи NPM

```
npm install is-on-tinkoff-invest
```

## Пример
Используйте **is-on-tinkoff-invest** в async функциях

```javascript
const quotes = require('is-on-tinkoff-invest')

const main = async () => {
    const stocks = await quotes.getTinkoffStocks()
    const etfs = await quotes.getTinkoffEtfs()
    const bonds = await quotes.getTinkoffBonds()
    const currencies = await quotes.getTinkoffCurrencies()
    const all = await quotes.getTinkoffAllQuotes()
}

main()
```