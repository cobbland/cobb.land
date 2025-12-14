import { woodPaneledSites } from '../data/onionring-variables.js';

const button = document.querySelector("#random-blog-button");

const woodPaneled = woodPaneledSites;

const choose = () => {
    const woodChoice = woodPaneled[Math.floor(Math.random() * woodPaneled.length)];
    const choices = [
        "https://xn--sr8hvo.ws/random", 
        "https://fediring.net/random",
        woodChoice.url,
    ];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

button.href = choose();
