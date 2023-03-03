
const quesCont=document.querySelector('#ques-container');
quesCont.style.display="none";

const continu=document.querySelector('.cont');
continu.style.display="none";

const tryAgain=document.querySelector('.try');
tryAgain.style.display="none";

const firstPg=document.querySelector('.firstpage');

const start=document.querySelector('.strt');
start.addEventListener('click',startGame)
 
const questList1=document.querySelector('#questList');
const guess1 = document.querySelector('#btn1');
const guess2 = document.querySelector('#btn2');
const guess3 = document.querySelector('#btn3');
const guess4 = document.querySelector('#btn4');
const allguess=document.querySelector('.btn');
const result=document.querySelector('#result');

let ranID;

function startGame(){

console.log("game started");
quesCont.style.display="grid";
continu.style.display="flex";
firstPg.style.display="none";
start.style.display="none";
tryAgain.style.display="flex";
nextQuestion();
}
//let randomID = Math.floor(Math.random() * questions.length)

function nextQuestion(){
//var randomID = Math.floor(Math.random() * questions.length)
 ranID = Math.floor(Math.random() * questions.length);

questList1.innerHTML = questions[ranID].quest;
guess1.textContent = questions[ranID].guess1;
    guess2.textContent = questions[ranID].guess2;
    guess3.textContent = questions[ranID].guess3;
    guess4.textContent = questions[ranID].guess4;
 
}



//allguess.addEventListener('click',checkAnswer);

/**function checkAnswer(){
if(guess1.textContent == questions[ranID].ans){

result.textContent=" you got that right ";
}
else{
    result.textContent=" you are wrong ";
}
}*/

guess1.addEventListener('click', myGuess1);
guess2.addEventListener('click', myGuess2);
guess3.addEventListener('click', myGuess3);
guess4.addEventListener('click', myGuess4);


function myGuess1() {
    
    if (guess1.textContent === questions[ranID].ans) {
        //ans.style.display = "none";
        //h2a.innerHTML = "<h1>HEYYY Right Answer!!! NOW I UNDERSTAND</h1>";

        result.textContent=" you got that right ";
        

    }
    else {
        //ans.style.display = "none";
       // h2a.innerHTML = "<h1>BZZZZ....Wrong Answer ,I DON'T GET IT</h1>";
       result.textContent=" you got that wrong ";
    }
}

function myGuess2() {
    if (guess2.textContent === questions[ranID].ans) {
        //ans.style.display = "none";
        result.innerHTML = "<h1>Right Answer</h1>";

    }
    else {

        //ans.style.display = "none";
        result.innerHTML = "<h1>Wrong Answer</h1>";

    }
}

function myGuess3() {
    if (guess3.textContent === questions[ranID].ans) {
        //ans.style.display = "none";
        result.innerHTML = "<h1>Right Answer</h1>";

    }
    else {

        //ans.style.display = "none";
        result.innerHTML = "<h1>Wrong Answer</h1>";

    }
}
function myGuess4() {
    if (guess4.textContent === questions[ranID].ans) {
        //ans.style.display = "none";
    result.innerHTML = "<h1>Right Answer</h1>";

    }
    else {
        //ans.style.display = "none";
        result.innerHTML = "<h1>Wrong Answer</h1>";

    }
}
continu.addEventListener('click',startGame);


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