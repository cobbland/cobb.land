const container = document.getElementById('seasonContainer');
const flowerCount = 150;
const flowerSymbols = [ '✾', '✿', '❀', '❁', '🏶', ];
const unusedSymbols = [ '🏵', '💮', ];

for (let i = 0; i < flowerCount; i++) {
    const flower = document.createElement('div');
    const randomSymbol = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
    flower.className = 'springFlower';
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.animationDuration = `${10 + Math.random() * 10}s`;
    flower.style.animationDelay = `${Math.random() * 10}s`;
    flower.style.setProperty('--swirl', `${
            Math.floor(Math.random() * 2) === 0 ? Math.random() * -100 : Math.random() * 100
        }vw`);
    flower.style.setProperty('--rot', `${Math.random() * 720 + 360}deg`);
    flower.textContent = randomSymbol;
    container.appendChild(flower);
}
