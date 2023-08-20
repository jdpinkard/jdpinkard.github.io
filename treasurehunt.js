var crown = Math.floor(Math.random()*9)
var bomb1 = Math.floor(Math.random()*9)
var bomb2 = Math.floor(Math.random()*9)
var clickCounter = 3
var bombFound = false
var crownFound = false
function clickCounterPopUp() {
  var popup = document.getElementById("clicksPopup");
  popup.classList.toggle("show");
}
function crownPopUp() {
  var popup = document.getElementById("crownsPopup");
  popup.classList.toggle("show");
}
function bombPopUp() {
  var popup = document.getElementById("bombsPopup");
  popup.classList.toggle("show");
}
const treasure = (location) => {
  if (bombFound === true) {
    bombPopUp()
  } else if (crownFound === true) {
    crownPopUp()
  } else if (clickCounter === 0) {
    clickCounterPopUp()
  } else {
    clickCounter --;
    if(location === crown){
      document.getElementById(location).innerHTML = "👑"
      crownPopUp()
      crownFound = true
    } else if(location === bomb1){
      document.getElementById(location).innerHTML = "💣"
      bombPopUp()
      bombFound = true
    } else if(location === bomb2){
      document.getElementById(location).innerHTML = "💣"
      bombPopUp()
      bombFound = true
    } else {
      document.getElementById(location).innerHTML = "&#x1f332"
    }
  }
  document.getElementById("clicks").textContent = "Clicks left: " + clickCounter
}
