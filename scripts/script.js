"use strict";
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let zoom1 = document.getElementById("img1");
let zoom2 = document.getElementById("img2");
let zoom3 = document.getElementById("img3");
let zoom4 = document.getElementById("img4");
let zoom5 = document.getElementById("img5");
let zoom6 = document.getElementById("img6");
let zoom7 = document.getElementById("img7");
let zoom8 = document.getElementById("img8");
let zoom9 = document.getElementById("img9");
zoom1.onclick = createOverlay;
zoom2.onclick = createOverlay;
zoom3.onclick = createOverlay;
zoom4.onclick = createOverlay;
zoom5.onclick = createOverlay;
zoom6.onclick = createOverlay;
zoom7.onclick = createOverlay;
zoom8.onclick = createOverlay;
zoom9.onclick = createOverlay;


function createOverlay() {
  let overlay = document.createElement("div");
  overlay.id = "lbOverlay";
  // Add the figure box to the overlay
  let figureBox = document.createElement("figure");
  overlay.appendChild(figureBox);


  // Add the image to the figure box
  let overlayImage = this.cloneNode("true");
  figureBox.appendChild(overlayImage);

  // Add a close button to the overlay
  let closeBox = document.createElement("div");
  closeBox.id = "lbOverlayClose";
  closeBox.innerHTML = "&times;";
  closeBox.onclick = function () {
    document.body.removeChild(overlay);
  }
  overlay.appendChild(closeBox);
  document.body.appendChild(overlay);
}

