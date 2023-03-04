const countdownTimerEL=document.querySelector('#timer');
const startEL=document.querySelector('.strt');
const guess22=document.querySelector('#btn2');
let time=1000;

let ref=setInterval(startTimer,1000);



function startTimer(){

    countdownTimerEL.innerHTML="Timer "+time;

    time--;
   //startEL.addEventListener('click',)
  /**  if(time==997){
   clearInterval(ref);
   countdownTimerEL.innerHTML="you win";

   }*/
}

startEL.addEventListener('click',myGuess1);
guess22.addEventListener('click',stopTimer);

function myGuess1() {
    clearInterval(ref);
   countdownTimerEL.innerHTML="you win";
   /**if(startEL.textcontent ===
    "Start"){

        countdownTimerEL.innerHTML="restarting";
        //clearInterval(ref);
        //ref=setInterval(startTimer,1000);
    }*/
    ref=setInterval(startTimer,1000);
}


function stopTimer(){
    clearInterval(ref);
   countdownTimerEL.innerHTML="now stop timer"+time;
}

/**startEL.addEventListener('click',function(){
    if(startEL.textcontent ==
       'Start'){

           countdownTimerEL.innerHTML="restarting";
           //clearInterval(ref);
           //ref=setInterval(startTimer,1000);
       }

  })*/




//SET TIME VARIABLE
//CREATE FUNTION TO MANIPULATE THT TIME
//START IT BY SETINTERVAL
//CALL THE ELEMENT THATS DISPLAYING IT