function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playlotto() {
    
const container = document.getElementById('balls');
    
container.innerHTML = '';
    
for (let i = 0; i < 6; i = i + 1) {
    let num = getRandomInt(1, 99);
        
    if (num < 10) {
    um = '0' + num;
     }
        
const ball = document.createElement('div');
ball.className = 'ball';
ball.textContent = num;
container.appendChild(ball);
    }
}