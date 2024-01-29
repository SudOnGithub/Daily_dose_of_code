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
