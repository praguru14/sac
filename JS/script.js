console.log("hello");

function findavg() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var nenum1 = Number(n1);
    var nenum2 = Number(n2);

    var avg = parseFloat((nenum1 + nenum2) / 2);

    var anz = parseint(avg);

    document.getElementById("Youranswer").innerHTML = "Average is : " + anz;
}