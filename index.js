function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function submit(){
    const basecurrency = document.getElementById('currencyfrom');//string currnecy name
    const pkrCurrency = document.getElementById('currency'); //number
    if(pkrCurrency.value.length == '0'|| pkrCurrency.value < 0){
       pkrCurrency.value = 0;
    }else if(pkrCurrency.value.length > '0'){
        pkrCurrency.value = pkrCurrency.value-0;
    }
    
    const convert = document.getElementById('convert');
    responseObj = Get(`https://v6.exchangerate-api.com/v6/d108e4b90d10abf082636e69/latest/${basecurrency.value}`);  
    const parseObj = JSON.parse(responseObj);
    // console.log(pkrCurrency.value * parseObj.conversion_rates[convert.value]); //shows output

    const output = document.getElementById('output');
    output.innerText = `Converted : ${(pkrCurrency.value * parseObj.conversion_rates[convert.value]).toFixed(2)}  ${convert.value}` ;

}
submit();
function currencyReverse(){
    var basecurrency = document.getElementById('currencyfrom').value;
    var abovecurrency = document.getElementById('convert').value;
    var tempCurrency =  basecurrency;
    basecurrency = abovecurrency;
    abovecurrency = tempCurrency;//working
    document.getElementById('currencyfrom').value = basecurrency;
    document.getElementById('convert').value = abovecurrency;
    submit();
}
var input = document.getElementById("currency");


function darkmode(){
    document.documentElement.classList.toggle('active');
}


