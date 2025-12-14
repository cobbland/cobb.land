const button = document.querySelector("#random-blog-button");

const woodPaneled = fetch('data/onionring-variables.js')
  .then(response => response.text())
  .then(text => {
    // Regex to match URLs (http, https)
    const urlRegex = /https?:\/\/[^\s'"]+/g;
    const urls = text.match(urlRegex);
    return urls;
  })
  .catch(err => console.error("Error fetching JS file:", err));

const choose = async () => {
    const woodChoices = await woodPaneled;
    const woodChoice = woodChoices[Math.floor(Math.random() * woodChoices.length)];
    const choices = [
        "https://xn--sr8hvo.ws/random", 
        "https://fediring.net/random",
        woodChoice,
    ];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

choose().then(url => button.href = url);

// button.href = await choose();

// button.addEventListener("click", () => {
//     choose().then(url => button.href = url);
// })
