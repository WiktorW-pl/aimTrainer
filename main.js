const point = document.querySelector('.point');
const btn = document.querySelector('button');
const scoreText = document.querySelector('.score');
const panel = document.querySelector('.btn-position');
const wynik = document.querySelector('h2');
const wynikContainer = document.querySelector('.wynik');
const radio = [...document.querySelectorAll('.radio')];
const reset = document.querySelector('.reset');

let miliSeconds=0;
let seconds = 0;
let score = 0;
let time = 0;
wynikContainer.style.opacity = 0;
point.style.opacity = 0;

const randomPoint = function(){
  point.style.opacity=1;
  let minTop = Math.ceil(0);
  let maxTop = Math.floor(750);
  const top = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
  let minLeft = Math.ceil(0);
  let maxLeft = Math.floor(950);
  const left = Math.floor(Math.random() * (maxLeft - minLeft + 1)) + minLeft;
  point.style.top = top+'px';
  point.style.left = left+'px';}

const counter = function(){
    point.style.opacity=0;
    point.style.top= 60+'px';
    score++;
    scoreText.textContent=score;
    return score;
}

const startGame = () =>{
    btn.remove();
    czas();
    x();
    randomPoint();
}
const x = function(){
let myInterval = setInterval(randomPoint, 1000);
if(radio[0].checked){
myInterval = setInterval(randomPoint, 1000);
}else if(radio[1].checked)
{myInterval = setInterval(randomPoint, 800);
}else if (radio[2].checked){
    myInterval = setInterval(randomPoint, 600);
}
}
const czas = function(){
        const timer = document.createElement('p');
        panel.appendChild(timer);
        const timerIndex = setInterval(()=>
        {
            miliSeconds++;
            if(miliSeconds < 10) miliSeconds = "0" +miliSeconds;
            if(miliSeconds == 99)
        {
            seconds++;
            miliSeconds = 0;
            if(seconds < 10) seconds = "0" +seconds;
        }
            if(seconds==30){
                clearInterval(timerIndex);
                wynikContainer.style.opacity=1;
                wynik.textContent += score;
                point.style.width = 0+'px';
            }
      timer.textContent = `${seconds} : ${miliSeconds}`;
        }, 10 )
}
const resetPage = () =>{
    location.reload();
}
point.addEventListener('click', counter);
btn.addEventListener('click', startGame);
reset.addEventListener('click', resetPage);