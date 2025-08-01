// Declaração das variaveis do HTML
const leftBtn = document.querySelector("[data-btn-left]");
const rightBtn = document.querySelector("[data-btn-right]");
const carouselWrapper = document.querySelector("[data-carousel-wrapper]");

// Variaveis fixas

const gap = 28;
const widthCard = 175;
const totalCards = carouselWrapper.children.length; //comprimento dos filhos dentro do carouselWrapper
const visibleCards = 5.5;
const maxTranslatex = 0; //limite máximo que o translatex pode mover para a direita
const maxScroll = -((widthCard + gap) * (totalCards - visibleCards));

let position = 0;

function updateScroll() {
  carouselWrapper.style.transform = `translateX(${position}px)`;
}

rightBtn.addEventListener("click", () => {
  position -= gap + widthCard;

  if (position < maxScroll) {
    position = maxScroll;
  }

  updateScroll();
});

leftBtn.addEventListener("click", () => {
  position += gap + widthCard;

  if (position > maxTranslatex) {
    position = maxTranslatex;
  }

  updateScroll();
});
