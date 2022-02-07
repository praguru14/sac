const api = "https://api.exchangerate-api.com/v4/latest/USD";
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}

let inInr="";
let avg="";
let totalAmount="";
let totalAP="";
let finalSpilt="";


convertUsdToInr=()=>{
    let converter = Number(document.getElementById("convert").value);
    fetch(api)
    .then(response => response.json())
    .then(data => {
         let rate = data.rates.INR;
        const amount = converter * rate;
        document.getElementById("conv").innerHTML = "(Your $" + converter +" converts to ₹" + amount.round(4) + " in INR)" ;
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

    //calculation of logic
     totalAmount = (n1+n3+n5+n7+n9+n11+n13+n15+n17+n19);
     totalAP = (n1*n2+ n3*n4+ n5*n6+ n7*n8+ n9*n10+ n11*n12+ n13*n14+ n15*n16+ n17*n18+ n19*n20);
     avg = totalAP/totalAmount;

    //converting in rupees or dollar
    let symbol = "";
    if(sign === "rupees"){
        symbol = "₹";
        if(totalAmount>0){
        document.getElementById("avg").innerHTML = "You bought a total of " + totalAmount + " shares " +"<br>"+ "Your average price is " + symbol + avg.round(4)+"<br>"+ "Your total money spent is " + symbol + totalAP.round(3);
    }
    else{
        document.getElementById("avg").innerHTML = "You havent entered any value,kindly enter and then try again";
    }
    }
    else if(sign === "dollar"){
        symbol = "$";
        inInr = "This in Indian rupees is ₹";
        fetch(api)
    .then(response => response.json())
    .then(data => {
         let rateUSD = data.rates.INR;
          if(totalAmount>0){
       let pTag = document.getElementById("avg").innerHTML = "You bought a total of " + totalAmount + " shares " +"<br>"+ "Your average price is " + symbol + avg.round(4)+"(₹"+
        (avg*rateUSD).round(4)+")"+"<br>"+ "Your total money spent is " + symbol + totalAP.round(3) +"<br>"+inInr+""+(totalAP*rateUSD).round(4);
        let spilting = pTag.split(" ");
        let splitingLastItem = spilting[21].split("₹");
        finalSpilt = splitingLastItem[1]; 
    }
        else{
        document.getElementById("avg").innerHTML = "You havent entered any value,kindly enter and then try again";
        }
    })
  
    }
}

//resetting
reset=()=>{
    for (let x = 1; x < 21; x++) {
  document.getElementById("num"+x).value="";
}
}


//------------------------------------------------------------------------------
profit=()=>{
    console.log(finalSpilt);

if(finalSpilt==0){
document.getElementById("profit").innerHTML="Kindly use the average calculator first inorder to use this profit calculator or else use the next calculator"
}
else{
        const netProfString = "Your net profit is ₹";
    let inputVal= Number(document.getElementById("inputVal").value);
    let profit = inputVal-finalSpilt;
    let percentage = (profit/finalSpilt)*100;
    if(profit>0){
        document.getElementById("profit").innerHTML=  "Your net profit is ₹" + profit.round(4)+"<br>"+
    "In percentage it attributes to: "+percentage.round(1)+"%.";
    }
    document.getElementById("profit").innerHTML=  "Your net loss is ₹" + profit.round(4)+"<br>"+
    "In percentage it attributes to: "+percentage.round(1)+"%.";
}
     
}

netProf=()=>{
    let val1 = Number(document.getElementById("inputVal1").value);
    let val2 = Number(document.getElementById("inputVal2").value);
    const net = val2-val1;
    if(net<0){
      document.getElementById("netProf").innerHTML = "Your net loss is ₹" +net ;  
    }
    document.getElementById("netProf").innerHTML = "Your net profit is ₹" +net ;
}