function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

function submit(){
    const basecurrency = document.getElementById('currencyfrom');
    const pkrCurrency = document.getElementById('currency'); 
    const convert = document.getElementById('convert');
    responseObj = Get(`https://v6.exchangerate-api.com/v6/d108e4b90d10abf082636e69/latest/${basecurrency.value}`);  
    const parseObj = JSON.parse(responseObj);
    console.log(pkrCurrency.value * parseObj.conversion_rates[convert.value]);

    const output = document.getElementById('output');
    output.innerText = `Converted : ${(pkrCurrency.value * parseObj.conversion_rates[convert.value]).toFixed(2)}  ${convert.value}` ;

}

var input = document.getElementById("currency");

input.addEventListener('keyup', function(event) {
    if (event.keycode === 13) {
      event.preventDefault();
      submit();
    }
  });

function darkmode(){
    // const bodytag = document.getElementsByTagName('body');
    // bodytag[0].classList.toggle('active'); git checl
    document.documentElement.classList.toggle('active');
}

// responseObj = Get(`https://v6.exchangerate-api.com/v6/d108e4b90d10abf082636e69/latest/${basecurrency.value}`);

// console.log(parseObj.conversion_rates);


// const data = document.createElement('p');
// data.innerText = JSON.stringify(parseObj.conversion_rates);

// let a = pkrCurrency.value;
// let b = parseObj.conversion_rates[convert.value];
// var converted = a*b ;




// const body = document.querySelector('body');
// body.appendChild(data);

