// Menu bar

function menuBar() {
  const menuView = document.querySelector(".hamburger-menu");
  if (menuView.style.display === "block") {
    menuView.style.display = "none";
  } else {
    menuView.style.display = "block";
  }
}

// Delivery Time

const deliveryTime1 = new Date();
deliveryTime1.setDate(deliveryTime1.getDate() + 7);

const deliveryTime2 = new Date();
deliveryTime2.setDate(deliveryTime1.getDate() + 10);

const deliveryDate = document.getElementById("delivery-time");
deliveryDate.innerHTML = ` Get it between <b> ${deliveryTime1.toDateString()} </b> and
  <b> ${deliveryTime2.toDateString()}</b></span>`;

// Item cart at bottom

const buyItem = document.getElementById("item-cart");
const sticky = buyItem.offsetTop;

function myFunction() {
  if (window.scrollY > 900) {
    buyItem.classList.add("sticky");
  } else {
    buyItem.classList.remove("sticky");
  }
}

window.onscroll = function () {
  myFunction();
};

// Top Slides

const slides = document.querySelectorAll(".slide");
let counter = 0;
const imageNumber = document.getElementById("image-number");
imageNumber.innerHTML = "1/4";

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function goNext() {
  if (counter < 3) {
    counter++;
    slideImage();
  }
}

const goPrev = () => {
  if (counter > 0) {
    counter--;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
    imageNumber.innerHTML = counter + 1 + "/4";
  });
};

// Bottom slides

const slidesTwo = document.querySelectorAll(".second-slides");
let counterTwo = 0;
const reviewNumber = document.getElementById("review-number");
reviewNumber.innerHTML = "1/3";

slidesTwo.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function goNextTwo() {
  if (counterTwo < 2) {
    counterTwo++;
    slideReview();
  }
}

const goPrevTwo = () => {
  if (counterTwo > 0) {
    counterTwo--;
    slideReview();
  }
};

const slideReview = () => {
  slidesTwo.forEach((slide) => {
    slide.style.transform = `translateX(-${counterTwo * 100}%)`;
    reviewNumber.innerHTML = counterTwo + 1 + "/3";
  });
};

// Making top slide draggable

const draggableElement = document.querySelector(".hero-section-main-images");

draggableElement.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text/plain", "Drag me!");
});

draggableElement.addEventListener("dragend", function (e) {
  // Handle drag end if needed
});

// Questions area

function questionPop() {
  const answerView = document.querySelector(".answer-text");
  const questionText = document.querySelector(".question-text");
  if (answerView.style.display === "none") {
    answerView.style.display = "block";
    questionText.style.textDecoration = "underline";
  } else {
    answerView.style.display = "none";
    questionText.style.textDecoration = "none";
  }
}

function questionTwoPop() {
  const answerTwoView = document.querySelector(".answer-text2");
  const questionTwoText = document.querySelector(".question-text2");
  if (answerTwoView.style.display === "none") {
    answerTwoView.style.display = "block";
    questionTwoText.style.textDecoration = "underline";
  } else {
    answerTwoView.style.display = "none";
    questionTwoText.style.textDecoration = "none";
  }
}
