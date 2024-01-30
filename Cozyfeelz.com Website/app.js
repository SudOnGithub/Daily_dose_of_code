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
