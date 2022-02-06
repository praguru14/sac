// include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}

exchange= ()=>{
   fetch(api)
    .then(response => response.json())
    .then(data => {
        const rate = data.rates.INR;
        const amount = document.querySelector(".amount").value;
        const result = amount * rate;
        document.querySelector(".result").value = result;
    }
    )


}

convert=()=>{
    let converter = document.getElementById("convert").value;
    
    fetch(api)
    .then(response => response.json())
    .then(data => {
        const rate = data.rates.INR;
        const amount = converter;
        const result = amount * rate;
        document.getElementById("conv").innerHTML = result.round(4);
    }
    )

    
}


 findavg=()=> {

    //TODO: Refactor this let 
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let n3 = Number(document.getElementById("num3").value);
    let n4 = Number(document.getElementById("num4").value);
    let n5 = Number(document.getElementById("num5").value);
    let n6 = Number(document.getElementById("num6").value);
    let n7 = Number(document.getElementById("num7").value);
    let n8 = Number(document.getElementById("num8").value);
    let n9 = Number(document.getElementById("num9").value);
    let n10 = Number(document.getElementById("num10").value);
    let n11 = Number(document.getElementById("num11").value);
    let n12 = Number(document.getElementById("num12").value);
    let n13 = Number(document.getElementById("num13").value);
    let n14 = Number(document.getElementById("num14").value);
    let n15 = Number(document.getElementById("num15").value);
    let n16 = Number(document.getElementById("num16").value);
    let n17 = Number(document.getElementById("num17").value);
    let n18 = Number(document.getElementById("num18").value);
    let n19 = Number(document.getElementById("num19").value);
    let n20 = Number(document.getElementById("num20").value);
    let sign = document.getElementById("sign").value;
    console.log(sign);
    let symbol = "";
    if(sign === "rupees"){
        symbol = "₹";
    }
    else if(sign === "dollar"){
        symbol = "$";
    }
    else{
        symbol = "€";
       }

    let totalAmount = (n1+n3+n5+n7+n9+n11+n13+n15+n17+n19);
    if(totalAmount>0){
    let totalAP = (n1*n2+ n3*n4+ n5*n6+ n7*n8+ n9*n10+ n11*n12+ n13*n14+ n15*n16+ n17*n18+ n19*n20);
    let avg = totalAP/totalAmount;
    
    document.getElementById("avg").innerHTML = "You bought a total of " + totalAmount + " shares " +"<br>"+ "Your average price is " + symbol + avg.round(4)+"<br>"+ "Your total money spent is " + symbol + totalAP.round(3);
    }
    else{
        document.getElementById("avg").innerHTML = "You havent entered any value,kindly enter and then try again";
    }
}