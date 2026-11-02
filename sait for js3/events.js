const btn = document.querySelector('.knopka1');
const text = document.getElementById('blok-teksta');

const list = [
    "Никто не может потерять ни прошлого, ни будущего. — Марк Аврелий",
    "Удовольствие — это начало и конец счастливой жизни. — Эпикур",
    "Если у вас есть «зачем» жить, вы вынесете почти любое «как». — Фридрих Ницше",
    "Человек обречен быть свободным. — Жан-Поль Сартр",
    "Путь в тысячу ли начинается с первого шага. — Лао-Цзы",
    "Смысл жизни — самовыражение. — Оскар Уайльд",
    "У нас есть только один миг — настоящее. — Лев Толстой"
];

btn.addEventListener('click', function() {

    text.classList.add('fade');
    
    const random = Math.floor(Math.random() * list.length);
    text.textContent = '"' + list[random] + '"';
    
    setTimeout(function() {
        text.classList.remove('fade');
    }, 300);
});

text.addEventListener('mouseenter', function() {
    text.style.color = '#555555'; 
});

text.addEventListener('mouseleave', function() {
    text.style.color = '#333333';
});