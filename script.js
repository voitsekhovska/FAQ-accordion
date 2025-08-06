"use strict";

const questionBoxes = document.querySelectorAll(".question-box");

questionBoxes.forEach((box) => {
  const answer = box.querySelector("p");
  const question = box.querySelector(".question-title");
  const icon = box.querySelector("img");

  question.addEventListener("click", () => {
    const isVisible = !answer.classList.contains("hidden");

    document.querySelectorAll(".question-box p").forEach((p) => p.classList.add("hidden"));
    document.querySelectorAll(".question-title img").forEach((img) => (img.src = "./assets/images/icon-plus.svg"));

    if (!isVisible) {
      answer.classList.remove("hidden");
      icon.src = "./assets/images/icon-minus.svg";
    }
  });
});
