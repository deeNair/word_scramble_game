const questions=[{
            quest: "AMERICA",
			guess1: "RCIAEMA",
			guess2: "COMARE",
			guess3: "RICEAEM",
			guess4: "EEMCIAR",
			ans: "RCIAEMA"
}];

//console.log(questions[1].guess1);
const start=document.querySelector('.strt');
const guess1=document.querySelector('#btn1');
const guess2=document.querySelector('#btn2');
const guess3=document.querySelector('#btn3');
const guess4=document.querySelector('#btn4');

const h2a=document.querySelector('#quest');

start.addEventListener('click',myQuestion);
function myQuestion(){
    //const randomQuestion=questions[Math.floor(Math.random()*questions.length)]
    //const randomID=Math.floor(Math.random()*questions.length)
    h2a.innerHTML=questions[0].quest;
   guess1.textContent=questions[0].guess1;
    guess2.textContent=questions[0].guess2;
    guess3.textContent=questions[0].guess3;
    guess4.textContent=questions[0].guess4;
    
 //guess1.addEventListener('click',myGuess1(Event));

}

guess1.addEventListener('click',myGuess1);
guess2.addEventListener('click',myGuess2);
guess3.addEventListener('click',myGuess3);
guess4.addEventListener('click',myGuess4);


function myGuess1(eve){
    if(guess1.textContent === questions[0].ans ){
        console.log("right answer")
    }
    else{
        console.log("wrong answer")
    }
}

function myGuess2(eve){
    if(guess2.textContent === questions[0].ans ){
        console.log("right answer")
    }
    else{
        console.log("wrong answer")
    }
}

function myGuess3(eve){
    if(guess3.textContent === questions[0].ans ){
        console.log("right answer")
    }
    else{
        console.log("wrong answer")
    }
}
function myGuess4(eve){
    if(guess4.textContent === questions[0].ans ){
        console.log("right answer")
    }
    else{
        console.log("wrong answer")
    }
}
