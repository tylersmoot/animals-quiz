// Variable declarations

var answerButton = document.getElementById("answerOne");
var answerButtonTwo = document.getElementById("answerTwo");
var answerButtonThree = document.getElementById("answerThree");
var answerButtonFour = document.getElementById("answerFour");
var answerButtonFive = document.getElementById("answerFive");
var buttonOne = document.querySelector("#buttonOne");
var buttonTwo = document.querySelector("#buttonTwo");
var buttonThree = document.querySelector("#buttonThree");
var buttonFour = document.querySelector("#buttonFour");
var buttonFive = document.querySelector("#buttonFive");
var correct = document.querySelector(".correctOne");
var correctTwo = document.querySelector(".correctTwo");
var correctThree = document.querySelector(".correctThree")
var correctFour = document.querySelector(".correctFour");
var correctFive = document.querySelector(".correctFive");
var incorrect = document.querySelector(".incorrectOne");
var decision = document.querySelector(".decision");
var decisionTwo = document.querySelector(".decisionTwo");
var decisionThree = document.querySelector(".decisionThree");
var decisionFour = document.querySelector(".decisionFour");
var decisionFive = document.querySelector(".decisionFive");
var sectionOne = document.querySelector(".questionOne");
var sectionTwo = document.querySelector(".questionTwo");
var sectionThree = document.querySelector(".questionThree");
var sectionFour = document.querySelector(".questionFour");
var sectionFive = document.querySelector(".questionFive");


// disable all radio buttons function

function radioDisabled () {
    document.getElementById("answerOne").disabled = true;
    document.getElementById("1b").disabled = true;
    document.getElementById("1c").disabled = true;
}

// disable radio buttons question 2 function

function radioDisabledTwo () {
    document.getElementById("2a").disabled = true;
    document.getElementById("2b").disabled = true;
    document.getElementById("answerTwo").disabled = true;
    }

   
//    disable radio buttons question 3 function   

function radioDisabledThree () {
    document.getElementById("3a").disabled = true;
    document.getElementById("3b").disabled = true;
    document.getElementById("answerThree").disabled = true;
    }

    // disable radio buttons question 4 function 

function radioDisabledFour () {
    document.getElementById("answerFour").disabled = true;
    document.getElementById("4b").disabled = true;
    document.getElementById("4c").disabled = true;
    }

    // disable radio buttons question 5 function

function radioDisabledFive () {
    document.getElementById("5a").disabled = true;
    document.getElementById("answerFive").disabled = true;
    document.getElementById("5c").disabled = true;
    }    




// Question 1 logic

buttonOne.addEventListener("click", function () {
     if ( answerButton.checked !== true) {
     correct.classList.remove("d-none");
     decision.textContent = "incorrect, please try again.";

     } else { ( answerButton.checked === true)

     correct.classList.remove("d-none");

     decision.textContent = "correct, great job!";
     document.querySelector("button").disabled = true;
     sectionOne.style.color = "lightgray";
     radioDisabled();
       }
    
});


// Question 2 logic

buttonTwo.addEventListener("click", function () {
    if ( answerButtonTwo.checked !== true) {
    correctTwo.classList.remove("d-none");
    decisionTwo.textContent = "incorrect, please try again.";
    
    } else { ( answerButtonTwo.checked === true)
    
    correctTwo.classList.remove("d-none");
    
    decisionTwo.textContent = "correct, great job!";
    document.querySelector("#buttonTwo").disabled = true;
    sectionTwo.style.color = "lightgray";
    radioDisabledTwo();
    } 
});
    

//    Question 3 logic

buttonThree.addEventListener("click", function () {
    if ( answerButtonThree.checked !== true) {
    correctThree.classList.remove("d-none");
    decisionThree.textContent = "incorrect, please try again.";
    
    } else { ( answerButtonThree.checked === true)
    
    correctThree.classList.remove("d-none");
    
    decisionThree.textContent = "correct, great job!";
    document.querySelector("#buttonThree").disabled = true;
    sectionThree.style.color = "lightgray";
    radioDisabledThree();
           } 
});

    // Question 4 logic

buttonFour.addEventListener("click", function () {
    if ( answerButtonFour.checked !== true) {
    correctFour.classList.remove("d-none");
    decisionFour.textContent = "incorrect, please try again.";
        
    } else { ( answerButtonFour.checked === true)
        
    correctFour.classList.remove("d-none");
        
    decisionFour.textContent = "correct, great job!";
    document.querySelector("#buttonFour").disabled = true;
    sectionFour.style.color = "lightgray";
    radioDisabledFour();
         } 
});

     // Question 5 logic

buttonFive.addEventListener("click", function () {
    if ( answerButtonFive.checked !== true) {
    correctFive.classList.remove("d-none");
    decisionFive.textContent = "incorrect, please try again.";
        
    } else { ( answerButtonFive.checked === true)
        
    correctFive.classList.remove("d-none");
        
    decisionFive.textContent = "correct, great job!";
    document.querySelector("#buttonFive").disabled = true;
    sectionFive.style.color = "lightgray";
    radioDisabledFive();
         } 
});