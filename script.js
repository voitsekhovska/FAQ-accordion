"use strict";

const questionBoxes = document.querySelectorAll(".question-box");

questionBoxes.forEach((box, index) => {
  const answer = box.querySelector("p");
  const question = box.querySelector(".question-title");
  const icon = box.querySelector("img");

  question.setAttribute("tabindex", "0");

  const toggleAnswers = () => {
    const isVisible = !answer.classList.contains("hidden");

    document
      .querySelectorAll(".question-box p")
      .forEach((p) => p.classList.add("hidden"));
    document
      .querySelectorAll(".question-title img")
      .forEach((img) => (img.src = "./assets/images/icon-plus.svg"));

    if (!isVisible) {
      answer.classList.remove("hidden");
      icon.src = "./assets/images/icon-minus.svg";
    }
  };

  question.addEventListener("click", toggleAnswers);

  question.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();

      toggleAnswers();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      const nextIndex = (index + 1) % questionBoxes.length;
      questionBoxes[nextIndex].querySelector(".question-title").focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();

      const prevIndex =
        (index - 1 + questionBoxes.length) % questionBoxes.length;
      questionBoxes[prevIndex].querySelector(".question-title").focus();
    }
  });
});
