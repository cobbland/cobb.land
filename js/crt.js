let body = document.body;
let time = document.querySelector(".time");

let crt = sessionStorage.getItem("crt") !== null ? JSON.parse(sessionStorage.getItem("crt")) : false;

document.addEventListener("DOMContentLoaded", () => {
    if (crt) {
        body.classList.toggle("crt");
    }
});

time.addEventListener("click", () => {
    body.classList.toggle("crt");
    crt = !crt;
    sessionStorage.setItem("crt", JSON.stringify(crt));
});