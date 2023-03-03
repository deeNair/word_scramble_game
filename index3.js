const questions = [{
    quest: "AMERICA",
    guess1: "RCIAEMA",
    guess2: "COMARE",
    guess3: "RICEAEM",
    guess4: "EEMCIAR",
    ans: "RCIAEMA"
}, {
    quest: "ZIMBABWE",
    guess1: "EBOZMBWI",
    guess2: "WEBAZIBM",
    guess3: "WBZMIEBB",
    guess4: "BZIAIBWM",
    ans: "WEBAZIBM"
}
];

//console.log(questions[1].guess1);
    let ans = document.querySelector('#ans-grid');
    const ques = document.querySelector('#quest');
    const guess1 = document.querySelector('#btn1');
    const guess2 = document.querySelector('#btn2');
    const guess3 = document.querySelector('#btn3');
    const guess4 = document.querySelector('#btn4');

const quescont = document.querySelector('#ques-container');

//quescont.style.display="none";

const continu = document.querySelector('.cont');
const start = document.querySelector('.strt');

//let randomID=Math.floor(Math.random()*questions.length)


start.addEventListener('click', myQuestion);
continu.addEventListener('click', myQuestion);
//console.log(start);

function myQuestion() {
    


    ans.style.display = "grid";
    ques.style.display = "grid";
    let randomID = Math.floor(Math.random() * questions.length)

    ques.innerHTML = questions[randomID].quest;
    guess1.textContent = questions[randomID].guess1;
    guess2.textContent = questions[randomID].guess2;
    guess3.textContent = questions[randomID].guess3;
    guess4.textContent = questions[randomID].guess4;


     //currentTime = gameTimeMode;
     

   //start.addEventListener('click',decreaseTime);


    return randomID;
}

//var easyTime = 1000;
var mediumTime = 800;
//var hardTime = 600;
//var extremeHardTime = 300;

var gameTimeMode = mediumTime;

// set initial time countdown
var currentTime = gameTimeMode;
//intervalHandleTime = setInterval(decreaseTime, 10);

//document.querySelector('#timer').innerHTML = currentTime + "sec left";
//currentTime--;

function decreaseTime() {
    
   
    if (currentTime > 0) {
        document.querySelector('#timer').innerHTML = currentTime + "sec left";
        currentTime--;
    }
    else {
        document.querySelector('#timer').innerHTML = currentTime + "sec left" + " you lost";
        clearInterval(intervalHandleTime);
        //ans.style.display="none";
        //h2a.style.display="none";
        //timer.innerHTML="<h1>you lost</h1>"
    }
}

//intervalHandleTime = setInterval(decreaseTime, 10);

let eve = myQuestion();
console.log(eve);


guess1.addEventListener('click', myGuess1);
guess2.addEventListener('click', myGuess2);
guess3.addEventListener('click', myGuess3);
guess4.addEventListener('click', myGuess4);

//let timer = document.querySelector("#timer");


//guess1.addEventListener('click',myTimer);

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





/**function myAnswer(){
if(guess1.textContent === questions[eve].ans ){
//return true;
console.log("guess1")

}
else if(guess2.textContent === questions[eve].ans){
//return true;
console.log("guess2")
}
else if(guess3.textContent === questions[eve].ans){
//return true;
console.log("guess3")
}
else if(guess4.textContent === questions[eve].ans){
//return true;
console.log("guess4")
}
else
{ //return false;
console.log(" you lose")
}
}*/

