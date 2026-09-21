let count = 0;

function plus(click){

if (click ==='plus') 
    count=count + 1;
document.getElementById('score').textContent = count;

if (count > 0) {
    score.className = 'positive';
}
if (count === 0) {
    score.className = 'zero';}
}


function minus(click){

if (click ==='minus')
    count=count - 1;
document.getElementById('score').textContent = count;
if (count < 0) {
    score.className = 'negative';
}
if (count === 0) {
    score.className = 'zero';}
}


function reset(click){

if (click ==='reset')
    count = 0
document.getElementById('score').textContent = count;
score.className = 'zero';
}