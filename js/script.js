let startButton = document.querySelector(".startButton");
let restartButton = document.querySelector(".restartButton");
let stopAndGetButton = document.querySelector(".stopAndGetButton");
let scrollbarButton = document.querySelector(".scrollbarButton");
let marks = document.querySelector(".marks");

let initialMiliseconds = 0;
let initialSeconds = 0;
let initialMinutes = 0;
let initialHours = 0;
let boolean = true;
let i = 0;
let array = [""];

startButton.addEventListener(
  "click",
  function () {
    boolean = !boolean;
    let intervalOne = setInterval(() => {
      initStopWatch();
      if (boolean === true) {
        clearInterval(intervalOne);
        startButton.innerHTML = "resume";
      } else {
        startButton.innerHTML = "pause";
      }
        document.getElementById("hours").innerHTML=("0" + initialHours).slice(-2)
        document.getElementById("minutes").innerHTML=("0"+ initialMinutes).slice(-2)
        document.getElementById("seconds").innerHTML=("0" + initialSeconds).slice(-2)
        document.getElementById("miliseconds").innerHTML=("0"+initialMiliseconds).slice(-2)
    }, 10);
    
    let initStopWatch = function () {
      initialMiliseconds += 1;
      if (initialMiliseconds >= 100) {
        initialSeconds++;
        initialMiliseconds = 0;
      }
      if (initialSeconds >= 60) {
        initialMinutes++;
        initialSeconds = 0;
      }
      if (initialMinutes >= 60) {
        initialHours++;
        initialMinutes = 0;
      }
    };
  }
);


var restartStopwatch=(()=>{
  restartButton.addEventListener("click", function () {
    window.location.reload();
  });
})

restartStopwatch()

//generates info

let numberCounter = document.querySelector(".numberCounter");
/* let numberCounterTwo = document.querySelector(".numberCounterTwo"); */
let marksDifference = document.querySelector(".marksDifference");
/* let differenceTwo = document.querySelector(".differenceTwo"); */
let hoursArray = [0];
let minutesArray = [0];
let secondsArray = [0];
let milisecondsArray = [0];
let differenceArray = [];
let d = 0;
let milisecondsDifferenceTwo = 0;
let secondsDifference = 0;
let minutesDifference = 0;
let hoursDifference = 0;
let markerPosition = 0;
let markerPositionArray = [];

stopAndGetButton.addEventListener("click", function () {
  let hello = hours + ":" + minutes + ":" + seconds + ":" + miliseconds;
  array.unshift("<h3>" + hello + "</h3><br>");
  marks.innerHTML = array.join("");
  marksTwo.innerHTML = array.join("");

  d++;
  milisecondsArray.push(initialMiliseconds);
  secondsArray.push(initialSeconds);
  minutesArray.push(initialMinutes);
  hoursArray.push(initialHours);

  let milisecondsDifference = milisecondsArray[d] - milisecondsArray[d - 1];
  let secondsDifference = secondsArray[d] - secondsArray[d - 1];
  let minutesDifference = minutesArray[d] - minutesArray[d - 1];
  let hoursDifference = hoursArray[d] - hoursArray[d - 1];
  let milisecondsDifferenceTwo = 0;
  let secondsDifferenceTwo = 0;
  let minutesDifferenceTwo = 0;
  let hoursDifferenceTwo = 0;

  if (milisecondsDifference < 0) {
    secondsDifference--;
    milisecondsDifference += 100;
  } else if (secondsDifference < 0) {
    minutesDifference--;
    secondsDifference += 60;
  } else if (minutesDifference < 0) {
    hoursDifference--;
    minutesDifference += 60;
  }

  if (milisecondsDifference < 10) {
    milisecondsDifferenceTwo = "0" + secondsDifference;
  } else {
    milisecondsDifferenceTwo = milisecondsDifference;
  }

  if (secondsDifference < 10) {
    secondsDifferenceTwo = "0" + secondsDifference;
  } else {
    secondsDifferenceTwo = secondsDifference;
  }

  if (minutesDifference < 10) {
    minutesDifferenceTwo = "0" + minutesDifference;
  } else {
    minutesDifferenceTwo = minutesDifference;
  }

  if (hoursDifference < 10) {
    hoursDifferenceTwo = "0" + hoursDifference;
  } else {
    hoursDifferenceTwo = hoursDifference;
  }

  let difference =
    hoursDifferenceTwo +
    ":" +
    minutesDifferenceTwo +
    ":" +
    secondsDifferenceTwo +
    ":" +
    milisecondsDifferenceTwo;
  differenceArray.unshift("<h3>" + difference + "</h3><br>");
  marksDifference.innerHTML = differenceArray.join("");
  differenceTwo.innerHTML = differenceArray.join("");
  markerPosition++;
  markerPositionArray.unshift("<h3>" + markerPosition + "</h3><br>");
  numberCounter.innerHTML = markerPositionArray.join("");
  numberCounterTwo.innerHTML = markerPositionArray.join("");


});
