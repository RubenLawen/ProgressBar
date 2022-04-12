const mainbar = document.querySelector(".mainprogressbar");
const widthbar = document.querySelector(".progresswidth");

let random = parseInt(Math.random() * (14 - 3) + 3);
let maxWidth = 797;
let temp = 0;
let add = maxWidth / random;
let adder = add;

console.log(random);
widthbar.style.transition = `${random / 4}s linear`;

const inter = setInterval(() => {
  widthbar.style.width = `${adder}px`;
  adder = adder + add;
  console.log(parseInt(adder));
  if (parseInt(adder) >= maxWidth) {
    clearInterval(inter);
    widthbar.style.width = `${maxWidth - 1}px`;
  }
}, 1000);
