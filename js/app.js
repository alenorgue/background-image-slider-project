const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

// buena suerte

let index = 0;

let slider = document.querySelector(".img-container");
slider.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`;

const buttonLeft = document.querySelector(".btn-left");

const buttonRight = document.querySelector(".btn-right");

buttonLeft.addEventListener("click", function () {
  console.log("Flecha izquierda pulsada");
  index--;
if (index < 0) {index = pictures.length-1;} 
  slider.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`;
  
});

buttonRight.addEventListener("click", function () {
  console.log("flecha derecha pulsada");
  index++;
  if (index >= pictures.length) {index = 0;} 
  slider.style.backgroundImage = `url('./img/${pictures[index]}.jpeg')`;
  
});
