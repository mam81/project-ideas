const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');
const circle4 = document.querySelector('.circle4');
const circle5 = document.querySelector('.circle5');
const circle6 = document.querySelector('.circle6');
var circles = document.getElementsByTagName("div");

function lightCircles(number) {
    setInterval(() => {
            circles[number-1].style.backgroundColor = 'yellow';
    },500);
    setInterval(() => {
            circles[number-1].style.backgroundColor = 'transparent';
    },1000);
}

circle1.addEventListener('click',() => lightCircles(1));
circle2.addEventListener('click',() => lightCircles(2));
circle3.addEventListener('click',() => lightCircles(3));
circle4.addEventListener('click',() => lightCircles(4));
circle5.addEventListener('click',() => lightCircles(5));
circle6.addEventListener('click',() => lightCircles(6));

