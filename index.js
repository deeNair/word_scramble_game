const questions=['AMERICA', 'KENYA' ,'FRANCE'];
const randomQuestion=questions[Math.floor(Math.random()*questions.length)]
console.log(randomQuestion);
const h2=document.querySelector('h2');
const start=document.querySelector('.strt');
h2.innerHTML=randomQuestion;
console.log(h2.innerHTML);
start.addEventListener('click',function(event)
{

    h2.innerHTML=randomQuestion;

})