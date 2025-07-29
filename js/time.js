let time = document.querySelector(".time");

function updateTime(timeDOM) {
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let date = String(now.getDate()).padStart(2, "0");
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");

  timeDOM.innerText = `${month}/${date}/${year} ${hours}:${minutes}`;
}

setInterval(() => updateTime(time), 100);