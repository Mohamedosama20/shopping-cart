const CurrencyFormater = new Intl.NumberFormat(undefined, 
    {
        currency: 'USD',
        style: 'currency'

    })

    const FormatCurrency = (number) => {
        return CurrencyFormater.format(number)

    }
    export default FormatCurrency;
