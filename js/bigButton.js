const header = document.querySelector("#header");
const footer = document.querySelector("footer");
const main = document.querySelector("main");
const button = document.querySelector("#big-button");
const contentWindow = document.querySelector(".content-window");
const body = document.querySelector("body");
const extraPanels = document.querySelector("#extra-panels");

let big = sessionStorage.getItem("big") !== null ? JSON.parse(sessionStorage.getItem("big")) : false;

document.addEventListener("DOMContentLoaded", () => {
    if (big) {
        header.classList.toggle("invisible");
        footer.classList.toggle("invisible");
        extraPanels.classList.toggle("invisible");
        contentWindow.classList.toggle("big-window");
        main.classList.toggle("main-big");
    }
    // body.style.display = "initial";
});

button.addEventListener("click", () => {
    header.classList.toggle("invisible");
    footer.classList.toggle("invisible");
    extraPanels.classList.toggle("invisible");
    contentWindow.classList.toggle("big-window");
    main.classList.toggle("main-big");
    big = !big;
    sessionStorage.setItem("big", JSON.stringify(big));
});
