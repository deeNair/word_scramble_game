const questions=[{
            quest: "AMERICA",
			guess1: "RCIAEMA",
			guess2: "COMARE",
			guess3: "RICEAEM",
			guess4: "EEMCIAR",
			ans: "RCIAEMA"
},{quest: "ZIMBABWE",
guess1: "EBOZMBWI",
guess2: "WEBAZIBM",
guess3: "WBZMIEBB",
guess4: "BZIAIBWM",
ans: "WEBAZIBM"}
];

//console.log(questions[1].guess1);
const start=document.querySelector('.strt');
const guess1=document.querySelector('#btn1');
const guess2=document.querySelector('#btn2');
const guess3=document.querySelector('#btn3');
const guess4=document.querySelector('#btn4');

const h2a=document.querySelector('#quest');
//let randomID=Math.floor(Math.random()*questions.length)
let ans= document.querySelector('#ans-grid');
start.addEventListener('click',myQuestion);

function myQuestion(){
   
    ans.style.display="grid"
    let randomID=Math.floor(Math.random()*questions.length)
   
    h2a.innerHTML=questions[randomID].quest;
   guess1.textContent=questions[randomID].guess1;
    guess2.textContent=questions[randomID].guess2;
    guess3.textContent=questions[randomID].guess3;
    guess4.textContent=questions[randomID].guess4;
    
 //guess1.addEventListener('click',myGuess1(Event));

//let intervalHandleTime=setInterval(myTimer, 10)
/**function decreaseTime() {
    if(sec>0){
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    }
    else  {
        document.getElementById('timer').innerHTML = sec + "sec left";
        clearInterval(intervalHandleTime);
       
    }
}*/
/**var sec = 15;
var time = setInterval(myTimer, 1000);
function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        //alert("Time out!! :(");
        document.getElementById('timer').innerHTML =  "0 sec left";
       
    }

}*/



 return randomID;
}

let eve=myQuestion();
console.log(eve);

//guess1.addEventListener('click',myAnswer);
//guess2.addEventListener('click',myAnswer);
//guess3.addEventListener('click',myAnswer);
//guess4.addEventListener('click',myAnswer);
//let ansgrid= document.querySelector('#ans-grid');

//let newAlert=document.createElement('p');
//newAlert.textContent="japan";
//newAlert.append(ansgrid);


guess1.addEventListener('click',myGuess1);
guess2.addEventListener('click',myGuess2);
guess3.addEventListener('click',myGuess3);
guess4.addEventListener('click',myGuess4);

let timer=document.querySelector("#timer");


//guess1.addEventListener('click',myTimer);

function myGuess1(){
   
    if(guess1.textContent === questions[eve].ans ){
       ans.style.display="none";
        h2a.innerHTML="<h1>HEYYY Right Answer!!! NOW I UNDERSTAND</h1>";
        //clearInterval(setInterval(myTimer, 0));
        //myTimer(0);
        
        
       }
    else{
        ans.style.display="none";
        h2a.innerHTML="<h1>BZZZZ....Wrong Answer ,I DON'T GET IT</h1>";
        //intervalHandleTime = setInterval(decreaseTime, 10);
    }
}

function myGuess2(){
    if(guess2.textContent === questions[eve].ans ){
        ans.style.display="none";
        h2a.innerHTML="<h1>Right Answer</h1>";
        }
    else{
     
        ans.style.display="none";
        h2a.innerHTML="<h1>Wrong Answer</h1>";
        
    }
}

function myGuess3(){
    if(guess3.textContent === questions[eve].ans ){
        ans.style.display="none";
        h2a.innerHTML="<h1>Right Answer</h1>";
        
    }
    else{
       
        ans.style.display="none";
        h2a.innerHTML="<h1>Wrong Answer</h1>";
       
    }
}
function myGuess4(){
    if(guess4.textContent === questions[eve].ans ){
        ans.style.display="none";
        h2a.innerHTML="<h1>Right Answer</h1>";
        
    }
    else{
        ans.style.display="none";
        h2a.innerHTML="<h1>Wrong Answer</h1>";
     
    }
}



const continu=document.querySelector('.cont');
continu.addEventListener('click',myQuestion);

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

