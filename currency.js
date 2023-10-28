// https://app.freecurrencyapi.com/
//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0GDQj8i5XGzfuClthmn2TQ2LTePhRLCXjVc04HRM&currencies=TRY&base_currency=EUR
class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_0GDQj8i5XGzfuClthmn2TQ2LTePhRLCXjVc04HRM&currencies=";
    }
    
    async exchange(){
        //const response = await fetch(this.url + this.firstCurrency);
        // console.log(this.firstCurrency,"*",this.secondCurrency);

        let link = `${this.url}${this.firstCurrency}&base_currency=${this.secondCurrency}`;

        const response = await fetch(link);
        const data = await response.json();

        return data;
    }

    convert(value,value1){
        let link = `${this.url}${this.firstCurrency}&base_currency=${this.secondCurrency}`;

        // it was for checking a problem
        // console.log(Number(value1) * Number(value) ,"-",value,"-",value1);
        document.getElementById("outputResult").value = Number(value1) * Number(value);

    }
}


// hocanın yazdığı
// fetch(this.url + this.firstCurrency)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));