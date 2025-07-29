const header = document.getElementById("header");
const footer = document.getElementById("footer");
const button = document.getElementById("big-button");
const contentWindow = document.querySelector(".content-window");

button.addEventListener("click", () => {
    header.classList.toggle("invisible");
    footer.classList.toggle("invisible");
    contentWindow.classList.toggle("big-window");
});