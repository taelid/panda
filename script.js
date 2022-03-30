"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const showClickyModal = document.querySelectorAll(".clicky");

// function to show modal
const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// function to close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// function to show modal on click
for (let i = 0; i < showClickyModal.length; i++) {
  showClickyModal[i].addEventListener("click", showModal);
}

// function to close modal on clicks
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// function to close modal on ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
