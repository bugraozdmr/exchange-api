//* elementleri seç
const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondCurrency = document.querySelector("#secondCurrency");
//* obje olustur
//! mantık cur objesini sürekli değiştirmek
let cur = new Currency("USD","TRY");

//* baslangi flag degerleri tanımladık açılışta çalışsın
let flag1="TRY",flag2="USD";

eventListeners();

function eventListeners(){
    //? input ifadesi değiştiği gibi çalışır
    amountElement.addEventListener("input",exchangeCurrency);
    
    //? addEventListener bazı tarayıcılarda hata alabiliyor
    //? onchange kullanıldı
    firstSelect.onchange = function(){
        flag1 = firstSelect.value;
        //* flag degerleri her degistiginde obje değişir
        cur = new Currency(flag2,flag1);
        //* title değişir
        UI.change(flag1,flag2);
        exchangeCurrency();
    };
    secondCurrency.onchange = function(){
        flag2 = secondCurrency.value;
        //* flag degerleri her degistiginde obje değişir
        cur = new Currency(flag2,flag1);
        //* title değişir
        UI.change(flag1,flag2);
        exchangeCurrency();
    };
}

function exchangeCurrency(){
    let curr = cur.exchange()
    .then(response => {
        
        //? first inputtan gelen int deger gider - esdeger katsayi gider
        let value = amount.value;
        cur.convert(value,response.data[flag2]);
        // document.getElementById("outputResult").value = response.data[flag2];
    })
    .catch(err => console.log(err));

}