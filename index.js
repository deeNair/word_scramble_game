//import { balloons } from "./animation.js";

var soundCorrect = new Audio("audio/sound_correct.mp3");
var soundIncorrect = new Audio("audio/sound_incorrect.mp3");

let score=0;

const quesCont=document.querySelector('#ques-container');
quesCont.style.display="none";

const continu=document.querySelector('.cont');
continu.style.display="none";
const mainquestContEL=document.querySelector('.mainquest_container');
const nextquestEL=document.querySelector('.next-question');
//nextquestEL.style.display='none';

const tryAgain=document.querySelector('.try');
tryAgain.style.display="none";
//tryAgain.addEventListener('click',startGame);

const start=document.querySelector('.strt');
start.addEventListener('click',startGame)
 
const questList1=document.querySelector('#questList');
const guess1 = document.querySelector('#btn1');
const guess2 = document.querySelector('#btn2');
const guess3 = document.querySelector('#btn3');
const guess4 = document.querySelector('#btn4');
const allguess=document.querySelector('.btn');
const result=document.querySelector('#result');
const timeEl=document.querySelector('#timer');
const ansGrid=document.querySelector('.ans-grid');
const firstPg=document.querySelector('.firstpage');
const Score=document.querySelector('.Score');
const gify=document.querySelector('.gif')


let ranID;



let time=10;
let ref=setInterval(startTimer,1000);
//let gameTime=time;
function startGame(){

console.log("game started");
quesCont.style.display="grid";
continu.style.display="flex";
firstPg.style.display="none";
start.style.display="none";
tryAgain.style.display="flex";
//setInterval(startTimer,1000);
//startTimer();
ansGrid.style.display='grid';
gify.style.display='flex';
mainquestContEL.style.display='grid';
result.style.display='grid';
nextQuestion();

}


/**let mediumTime=1000;
var TotalgameTime = mediumTime;
let currentGameTime=TotalgameTime;
tim.textContent=currentGameTime+"sec left";
currentGameTime--;

function decTime(){
    if(currentGameTime>0)
    {
        tim.textContent=currentGameTime+"sec left";
    }
    else{
        tim.textContent=currentGameTime+"sec left";
        clearInterval(intervalTime);
    }
}
intervalTime = setInterval(decTime, 10);
**/
function startTimer(){
    //time=10;

    timeEl.innerHTML="Timer "+time;
    time--;
    //console.log(ref);

    if(time<=0){
        timeEl.innerHTML="times up";
ansGrid.style.display='none';
result.style.display='grid';
result.innerHTML="<h1>Times UP !!</h1>";
//soundIncorrect.play();
        //clearInterval(ref);
    
    }
    else{
       // console.log("im her");
      //time=10;
        //setInterval(startTimer,1000);
//timeEl.innerHTML=10;

continu.addEventListener('click',function(){
    time=10;
})


    }

   
  
}



function nextQuestion(){
//var randomID = Math.floor(Math.random() * questions.length)
ansGrid.style.display='grid';
result.style.display='none';
//let gameTime=time;
//setInterval(startTimer,1000);
 ranID = Math.floor(Math.random() * questions.length);

questList1.innerHTML = questions[ranID].quest;
guess1.textContent = questions[ranID].guess1;
    guess2.textContent = questions[ranID].guess2;
    guess3.textContent = questions[ranID].guess3;
    guess4.textContent = questions[ranID].guess4;
   clearInterval(ref);
   //timeEl.innerHTML="resetting";
   //time=setInterval(startTimer,1000);
   ref=setInterval(startTimer,1000);
   //time=ref;
   //clearInterval(ref);
   //ref=setInterval(startTimer,1000);
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
       
        //result.textContent=" you got that right ";
        result.innerHTML="<h1>Right Answer</h1>";
        clearInterval(ref);
        timeEl.innerHTML="yEAHH";
        ansGrid.style.display='none';
        result.style.display='grid';
        soundCorrect.play();
        score++;
        Score.innerHTML="Score "+score;
    }
    else {
        ansGrid.style.display='none';
        result.style.display='grid';
       // h2a.innerHTML = "<h1>BZZZZ....Wrong Answer ,I DON'T GET IT</h1>";
       result.innerHTML="<h1>Wrong Answer</h1>"
       result.innerHTML="The Right Answer is " + questions[ranID].ans;

       clearInterval(ref);
       timeEl.innerHTML="oh N0";
       soundIncorrect.play();
       Score.innerHTML="Score "+score;
    }
}

function myGuess2() {
    if (guess2.textContent === questions[ranID].ans) {
        //ans.style.display = "none";
        result.innerHTML = "<h1>Right Answer</h1>";
        clearInterval(ref);
   timeEl.innerHTML="yEAHH";
   ansGrid.style.display='none';
        result.style.display='grid';
       soundCorrect.play();
       score++;
       Score.innerHTML="Score "+score;
    }
    else {
        result.innerHTML = "<h1>Wrong Answer</h1>";
        clearInterval(ref);
       timeEl.innerHTML="oh N0";
       ansGrid.style.display='none';
       result.style.display='grid';
       soundIncorrect.play();
       Score.innerHTML="Score "+score;
    }
}

function myGuess3() {
    if (guess3.textContent === questions[ranID].ans) {
        //ans.style.display = "none";
        result.innerHTML = "<h1>Right Answer</h1>";
        clearInterval(ref);
   timeEl.innerHTML="yEAHH";
   ansGrid.style.display='none';
   result.style.display='grid';
       soundCorrect.play();
       score++;
       Score.innerHTML="Score "+score;
    }
    else {

        //ans.style.display = "none";
        result.innerHTML = "<h1>Wrong Answer</h1>";
        clearInterval(ref);
       timeEl.innerHTML="oh N0";
       ansGrid.style.display='none';
       result.style.display='grid';
       soundIncorrect.play();
       Score.innerHTML="Score "+score;

    }
}
function myGuess4() {
    if (guess4.textContent === questions[ranID].ans) {
        //ans.style.display = "none";
    result.innerHTML = "<h1>Right Answer</h1>";
    clearInterval(ref);
    timeEl.innerHTML="yEAHH";
    ansGrid.style.display='none';
    result.style.display='grid';
 soundCorrect.play();
 score++;
 Score.innerHTML="Score "+score;
    }
    else {
        //ans.style.display = "none";
        result.innerHTML = "<h1>Wrong Answer</h1>";
        clearInterval(ref);
       timeEl.innerHTML="oh N0";
       ansGrid.style.display='none';
       result.style.display='grid';
       soundIncorrect.play();
       Score.innerHTML="Score "+score;

    }
}
continu.addEventListener('click',nextQuestion);
//continu.addEventListener('click',startTimer);
tryAgain.addEventListener('click',function(){
   
    ansGrid.style.display='grid';
result.style.display='none';
//let gameTime=time;
//setInterval(startTimer,1000);
 ranID = ranID;
 time=10;
 score=0;

questList1.innerHTML = questions[ranID].quest;
guess1.textContent = questions[ranID].guess1;
    guess2.textContent = questions[ranID].guess2;
    guess3.textContent = questions[ranID].guess3;
    guess4.textContent = questions[ranID].guess4;
   clearInterval(ref);
   //timeEl.innerHTML="resetting";
   //time=setInterval(startTimer,1000);
   ref=setInterval(startTimer,1000);
   Score.innerHTML="Score "+score;

});



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
},{
    quest: "WALES",
	guess1: "SBWLE",
    guess2: "WESEL",
    guess3: "SWEAL",
    guess4: "SWSLA",
	ans: "SWEAL"
},{
    quest: "RUSSIA",
    guess1: "ISIRAS",
    guess2: "RUIASS",
    guess3: "SUSIRU",
    guess4: "TISSAU",
	ans: "RUIASS"

}
];
