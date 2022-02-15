const toggleButton = document.getElementsByClassName('toggle-buttons')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
function bmical()
{
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);
  //converting height into feet
  height = height * 12;
  //converting feet into meters 
  height = height * 0.3048;
  
  var bmi = weight / Math.pow(height,2);
  bmi = Math.round(bmi);
  if (bmi)
  document.getElementById("bmi").value = +bmi;
}