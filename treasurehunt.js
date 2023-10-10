var crown = Math.floor(Math.random()*25)
var bomb1 = Math.floor(Math.random()*25)
var bomb2 = Math.floor(Math.random()*25)
var clickCounter = 15

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
  if (clickCounter === 0) {
  } else {
    clickCounter --;
    if(location === crown){
      document.getElementById(location).innerHTML = "👑"
      crownPopUp()
      clickCounter = 0
    } else if(location === bomb1){
      document.getElementById(location).innerHTML = "💣"
      bombPopUp()
      clickCounter = 0
    } else if(location === bomb2){
      document.getElementById(location).innerHTML = "💣"
      bombPopUp()
      clickCounter = 0
    } else {
      document.getElementById(location).innerHTML = "🌴"
        if (clickCounter === 0) {
        clickCounterPopUp()
      }
    }
  }
  document.getElementById("clicks").textContent = "Clicks left: " + clickCounter
}
  }
  document.getElementById("clicks").textContent = "Clicks left: " + clickCounter
}
