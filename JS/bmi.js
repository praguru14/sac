const toggleButton = document.getElementsByClassName('toggle-buttons')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
function bmical()
{
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);

  //logic for meters
  let weightInKg = Number(document.getElementById("weight").value);
  let heightInMeters = Number(document.getElementById("height").value);
  let bmi = weightInKg / (heightInMeters * heightInMeters);
  //converting height into feet
  height = height * 12;
  //converting feet into meters 
  height = height * 0.3048;
  
  // var bmi = weight / Math.pow(height,2);
  // bmi = Math.round(bmi);
  // if (bmi)
  // document.getElementById("bmiI").value = +bmi;

  if(bmi<=18.5){
    document.getElementById("bmiI").innerHTML = "Your BMI is : "+bmi.round(2)+"<br>"+"You are underweight";
  }
  else if(bmi>18.5 && bmi<=24.9){
    document.getElementById("bmiI").innerHTML = "Your BMI is : "+bmi.round(2)+"<br>"+"You are normal";
  }
  else if(bmi>24.9 && bmi<=29.9){
    document.getElementById("bmiI").innerHTML = "Your BMI is : "+bmi.round(2)+"<br>"+"You are overweight";
  }
  else if(bmi>29.9){
    document.getElementById("bmiI").innerHTML = "Your BMI is : "+bmi.round(2)+"<br>"+"You are obese";
  }
  else{
    document.getElementById("bmiI").innerHTML = "Please enter valid values";
  }
}