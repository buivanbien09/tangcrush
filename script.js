"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  showGif("yes");
}

function showGif(choice) {
  if (choice === "yes") {
    catImg.src = "img/cat-yes.gif";  // Đường dẫn đến GIF
  }
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;  // Thêm dấu `` để tránh lỗi
}

function generateMessage(noCount) {
  const messages = [
    "Hông",
    "Có chắc hông?",
    "Làm ơn",
    "Đừng làm vậy với bé :<",
    "trái tim bé đang tan nát",
    "Bé sẽ khóc...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  if (image === "yes") {
    catImg.src = "img/cat-yes.gif";  // Khi chọn "Yes", hiển thị GIF
  } else {
    catImg.src = `img/cat-${image}.jpg`;  // Khi chọn "No", hiển thị ảnh tĩnh
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
