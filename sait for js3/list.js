const DATA_URL = 'data.json';

const productGrid = document.getElementById('product-grid');
const detailSection = document.getElementById('detail-section');
const detailCard = document.getElementById('detail-card');
const closeBtn = document.getElementById('close-btn');

let philosophersData = [];


async function loadPhilosophers() {
    try {
        const response = await fetch(DATA_URL);

        if (!response.ok) {
            throw new Error('Ошибка загрузки JSON');
        }

        philosophersData = await response.json();
        renderPhilosophersList(philosophersData);

    } catch (error) {
        console.error('Ошибка:', error);
        productGrid.innerHTML =
            '<p>Не удалось загрузить список философов.</p>';
    }
}


function renderPhilosophersList(philosophers) {
    productGrid.innerHTML = '';

    philosophers.forEach(philosopher => {
        const card = document.createElement('div');
        card.className = 'filosof-card';

        card.innerHTML = `
            <img src="${philosopher.image}" alt="${philosopher.name}">

            <h3>${philosopher.name}</h3>
            <p><strong>Годы жизни:</strong> ${philosopher.years}</p>
            <p><strong>Направление:</strong> ${philosopher.direction}</p>
            <p>${philosopher.shortDescription}</p>
            <button class="knopka1">Подробнее</button>
        `;

        card.addEventListener('click', () => {
            showPhilosopherDetail(philosopher.id);
        });

        productGrid.appendChild(card);
    });
}


function showPhilosopherDetail(philosopherId) {
    const philosopher = philosophersData.find(
        p => p.id === philosopherId
    );

    if (!philosopher) return;

    const ideasList = philosopher.ideas
        .map(idea => `<li>${idea}</li>`)
        .join('');

    detailCard.innerHTML = `
        <h2>${philosopher.name}</h2>

        <img src="${philosopher.image}" alt="${philosopher.name}">

        <p><strong>Годы жизни:</strong> ${philosopher.years}</p>
        <p><strong>Направление:</strong> ${philosopher.direction}</p>
        <p>${philosopher.description}</p>
        <h3>Основные идеи</h3>
        <ul>${ideasList}</ul>
    `;

    detailSection.classList.remove('hidden');
}


closeBtn.addEventListener('click', () => {
    detailSection.classList.add('hidden');
});

detailSection.addEventListener('click', event => {
    if (event.target === detailSection) {
        detailSection.classList.add('hidden');
    }
});


document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        detailSection.classList.add('hidden');
    }
});

loadPhilosophers();