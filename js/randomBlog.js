import { woodPaneledSites } from '../data/onionring-variables.js';
import { hotlineUrls } from '../data/hotline-urls.js';

const button = document.querySelector("#random-blog-button");

const choose = () => {
    const woodChoice = woodPaneledSites[Math.floor(Math.random() * woodPaneledSites.length)];
    const hotlineChoice = hotlineUrls[Math.floor(Math.random() * hotlineUrls.length)];
    const choices = [
        "https://xn--sr8hvo.ws/random", 
        "https://fediring.net/random",
        woodChoice.url,
        hotlineChoice,
    ];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

button.href = choose();
