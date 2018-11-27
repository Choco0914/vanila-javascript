const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const firstSlide = document.querySelector(".slider__item:first-child");
const lastSlide = document.querySelector(".slider__item:last-child");
const SHOWING_CLASS = "showing";
const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);

function rightHandleButton() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

function leftHandleButton() {
  const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    const preSlide = currentSlide.previousElementSibling;
    if (preSlide) {
      preSlide.classList.add(SHOWING_CLASS);
    } else {
      lastSlide.classList.add(SHOWING_CLASS);
    }
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

function mainScreen() {
  firstSlide.classList.add(SHOWING_CLASS);
}

function init() {
  mainScreen();
}
init();
button1.addEventListener("click", leftHandleButton);
button2.addEventListener("click", rightHandleButton);
