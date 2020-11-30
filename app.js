// clock 
//variables
const hourHand=document.querySelector('#hour');
const minuteHand=document.querySelector("#minute");
const secondHand=document.querySelector("#second");
// functions clock
function setTime(){


    const currentDate = new Date();
    const secondRatio =currentDate.getSeconds()/60;
    const minuteRatio =(secondRatio +currentDate.getMinutes())/60;
    const hourRatio =(minuteRatio + currentDate.getHours())/12;



    wareegSamee(secondHand,secondRatio);
    wareegSamee(minuteHand,minuteRatio);
    wareegSamee(hourHand,hourRatio);
}
function wareegSamee(element,rotationRatio){
    element.style.setProperty("--wareeg", rotationRatio *360)
}
setTime();
setInterval(setTime,1000)
// button variables
const btnOne =document.querySelector("#button1");
const btnTwo =document.querySelector("#button2");
const btnThree =document.querySelector("#button3");
const btnFour =document.querySelector("#button4");
const clock=document.querySelector('.clock');
const buttons=document.querySelectorAll(".button");
const buttonArray = Array.from(buttons);
const colors =["#fad490", "#f19292","#edf0f2","#ffe100"];
// addeventlistners
buttonArray[0].addEventListener("click",  () => {clock.style.background=colors[0]})
buttonArray[1].addEventListener("click",  () => {clock.style.background=colors[1]})
buttonArray[2].addEventListener("click",  () => {clock.style.background=colors[2]})
buttonArray[3].addEventListener("click",  () => {clock.style.background=colors[3]})
// function 
