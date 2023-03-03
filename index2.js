const questions = [{
    quest: "AMERICA",
    guess1: "RCIAEMA",
    guess2: "COMARE",
    guess3: "RICEAEM",
    guess4: "EEMCIAR",
    ans: "RCIAEMA"
},{
    quest: "ZIMBABWE",
    guess1: "EBOZMBWI",
    guess2: "WEBAZIBM",
    guess3: "WBZMIEBB",
    guess4: "BZIAIBWM",
    ans: "WEBAZIBM"
}
];

//console.log(questions[1].guess1);
const start = document.querySelector('.strt');
const guess1 = document.querySelector('#btn1');
const guess2 = document.querySelector('#btn2');
const guess3 = document.querySelector('#btn3');
const guess4 = document.querySelector('#btn4');

const h2a = document.querySelector('#quest');
//let randomID=Math.floor(Math.random()*questions.length)
let ans = document.querySelector('#ans-grid');
//setting time for the game

let currentTime = 10;

start.addEventListener('click', myQuestion);

function myQuestion() {
    
    ans.style.display = "grid";
    h2a.style.display = "grid";
    let randomID = Math.floor(Math.random() * questions.length)

    h2a.innerHTML = questions[randomID].quest;
    guess1.textContent = questions[randomID].guess1;
    guess2.textContent = questions[randomID].guess2;
    guess3.textContent = questions[randomID].guess3;
    guess4.textContent = questions[randomID].guess4;



     //currentTime = gameTimeMode;
     //document.querySelector('#timerText').innerHTML = currentTime + "sec left";
     //currentTime--;
    //intervalHandleTime = setInterval(decreaseTime,1000);

     
    start.addEventListener('click',startTimer);
   

    return randomID;
}




function startTimer(){
   
  

 let countdownTimer = setInterval(startTimer,1000);
     //console.log("click start button");
   
    
    timer.textContent=currentTime;
  /**if(currentTime==0){
     clearInterval(countdownTimer);
      const h3= document.createElement('h3');
      h3.innerText="TIMES UP";

  }*/

    decreaseTime();
   
}








//var mediumTime = 1000;
//var gameTimeMode = mediumTime;

// set initial time countdown
//var currentTime = gameTimeMode;

//document.querySelector('#timerText').innerHTML = currentTime + "sec left";
//currentTime--;

function decreaseTime() {
    currentTime--;
    if (currentTime > 0) {
        document.querySelector('#timer').innerHTML = currentTime + "sec left";
        //currentTime--;
    }
    else {
        document.querySelector('#timer').innerHTML = currentTime + "sec left" + " you lost";
        clearInterval(setInterval(decreaseTime, 10));
        ans.style.display="none";
        h2a.style.display="none";
        timer.innerHTML="<h1>you lost</h1>"
    }
}

//intervalHandleTime = setInterval(decreaseTime, 10);


let eve = myQuestion();
console.log(eve);


guess1.addEventListener('click', myGuess1);
guess2.addEventListener('click', myGuess2);
guess3.addEventListener('click', myGuess3);
guess4.addEventListener('click', myGuess4);

/**guess1.addEventListener('click',function(){
    clearInterval(intervalHandleTime);
})*/


function myGuess1() {
    
    if (guess1.textContent === questions[eve].ans) {
        ans.style.display = "none";
        h2a.innerHTML = "<h1>HEYYY Right Answer!!! NOW I UNDERSTAND</h1>";
        

    }
    else {
        ans.style.display = "none";
        h2a.innerHTML = "<h1>BZZZZ....Wrong Answer ,I DON'T GET IT</h1>";

    }
}

function myGuess2() {
    if (guess2.textContent === questions[eve].ans) {
        ans.style.display = "none";
        h2a.innerHTML = "<h1>Right Answer</h1>";

    }
    else {

        ans.style.display = "none";
        h2a.innerHTML = "<h1>Wrong Answer</h1>";

    }
}

function myGuess3() {
    if (guess3.textContent === questions[eve].ans) {
        ans.style.display = "none";
        h2a.innerHTML = "<h1>Right Answer</h1>";

    }
    else {

        ans.style.display = "none";
        h2a.innerHTML = "<h1>Wrong Answer</h1>";

    }
}
function myGuess4() {
    if (guess4.textContent === questions[eve].ans) {
        ans.style.display = "none";
        h2a.innerHTML = "<h1>Right Answer</h1>";

    }
    else {
        ans.style.display = "none";
        h2a.innerHTML = "<h1>Wrong Answer</h1>";

    }
}
const continu = document.querySelector('.cont');
continu.addEventListener('click', myQuestion);

