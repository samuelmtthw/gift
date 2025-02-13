const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const title = document.getElementById("question");
const items = document.querySelectorAll(".item");
const picture = document.getElementById("picture");

const message = [
  "hi jo, <br> will you be my valentine?",
  "please :(",
  "pleaaase :(",
  "mau dong :(",
  "jangan no terus :((",
  "pencet yes aja sekali :)",
  "PLEASE BGT MAU",
  "last chance :(",
  "hehehehe :)",
];

let index = 0;

title.innerHTML = message[index];

noButton.addEventListener("click", () => {
  let yesWidth = yesButton.offsetWidth;
  let yesHeight = yesButton.offsetHeight;

  let noWidth = noButton.offsetWidth;
  let noHeight = noButton.offsetHeight;

  if (index >= 8) {
    noButton.remove();
  } else {
    // Increase both width & height by 50px
    yesButton.style.width = yesWidth + 20 + "px";
    yesButton.style.height = yesHeight + 20 + "px";

    noButton.style.width = noWidth - 5 + "px";
    noButton.style.height = noHeight - 5 + "px";

    index++;
    title.innerHTML = message[index];
  }
});

yesButton.addEventListener("click", () => {
  yesButton.remove();
  noButton.remove();
  title.innerText =
    "HEHEHE YEY \ni love you sayang 🤍\nhappy valentines day 😘";
  items.forEach((item) => {
    document.querySelectorAll(".item img").forEach((img) => img.remove());
    item.classList.add("bounce");
    item.innerText = "💕";
  });
  const img = document.createElement("img");
  img.src = "assets/cantik2.png";
  img.alt = "koala cantik";
  picture.appendChild(img);
});
