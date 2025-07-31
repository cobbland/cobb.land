const button = document.querySelector("#random-blog-button");

const choose = () => {
    const choices = ["https://xn--sr8hvo.ws/random", "https://fediring.net/random"];
    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

button.href = choose();

button.addEventListener("click", () => {
    button.href = choose();
})
