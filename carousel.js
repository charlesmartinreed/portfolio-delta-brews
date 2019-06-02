const carousel = document.querySelector(".grid-carousel");
const slides = carousel.querySelectorAll(".grid-carousel__item");
const leftButton = document.querySelector(".js-left");
const rightButton = document.querySelector(".js-right");

// each element has an order attribute, we need to get that so that we can change that number
const getOrder = elem => {
  const elemOrderValue = parseInt(getComputedStyle(elem).order);
  return elemOrderValue;
};

// const moveRight = () => {
//   slides.forEach(slide => {
//     order = getOrder(slide);

//     if (order < slides.length) {
//       slide.style.order = order += 1;
//     } else {
//       // last slide should become # 1
//       slide.style.order = 1;
//     }
//   });
// };

const moveSlideTo = direction => {
  slides.forEach(slide => {
    order = getOrder(slide);

    if (direction === "right") {
      if (order < slides.length) {
        slide.style.order = order += 1;
      } else {
        slide.style.order = 1;
      }
    }

    if (direction === "left") {
      if (order === 0) {
        slide.style.order = 5;
      } else {
        slide.style.order = order -= 1;
      }
    }
  });
};

rightButton.addEventListener("click", () => {
  moveSlideTo("right");
});

leftButton.addEventListener("click", () => {
  moveSlideTo("left");
});
