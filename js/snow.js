const container = document.getElementById('winterContainer');
const snowflakeCount = 150;
const snowflakeSymbols = ['❄︎', '❅', '❆', '❇︎', '❈', '❉', '❊', '❋']

for (let i = 0; i < snowflakeCount; i++) {
    const snowflake = document.createElement('div');
    const randomSymbol = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
    snowflake.className = 'winterSnowflake';
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${10 + Math.random() * 10}s`;
    snowflake.style.animationDelay = `${Math.random() * 10}s`;
    snowflake.style.setProperty('--swirl', `${Math.random() * 20 - 10}vw`);
    snowflake.style.setProperty('--rot', `${Math.random() * 720 + 360}deg`);
    snowflake.textContent = randomSymbol;
    container.appendChild(snowflake);
}
