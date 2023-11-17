//Task 4

let num1, num2, userans, correctans;

function redirectToPlay() {
  alert("Start button clicked! :)");
  window.location.href = "./play.html";
}

function playGame() {
  //enables the buttons in the play area
  document.getElementById("next").disabled = false;
  document.getElementById("accept").disabled = false;
  document.getElementById("check").disabled = false;

  //the 2 random numbers (1-9) & (1-5)
  num1 = Math.floor(Math.random() * 9) + 1;
  num2 = Math.floor(Math.random() * 5) + 1;

  //displays the two numbers in disabled fields
  document.getElementById("randnum1").value = num1;
  document.getElementById("randnum2").value = num2;
}

window.onload = function () {
  playGame();
};

function checkAns() {
  if (userans === "") {
    alert("No answer was entered");
    return false;
  }
  //idk why this doesn't work

  //checking to see if the random number is 1-5 for the correct answer
  if (num2 === 1) {
    correctans = num1;
  }

  if (num2 === 2) {
    correctans = num1 * 2;
  }

  if (num2 === 3) {
    correctans = num1 * 3;
  }

  if (num2 === 4) {
    correctans = num1 * 4;
  }

  if (num2 === 5) {
    correctans = num1 * 5;
  }

  //check to see if the answer is correct
  if (userans === correctans) {
    return (document.getElementById("result").value = "Correct!");
    //push the response to PlayerRegistrationData
  } else {
    return (document.getElementById("result").value = "Incorrect!");
    //push the response to PlayerRegistrationData
  }
}

// rename to findPercentageScore()
function endFunction() {
  alert("End button clicked! :)");
}
