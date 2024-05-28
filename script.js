document.addEventListener("DOMContentLoaded", function() {
    const universe = document.querySelector(".universe");
    const numberOfStars = 50; // Adjust the number of stars as needed
  
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      universe.appendChild(star);
  
      // Randomly position the star within the universe
      const randomX = Math.random() * universe.offsetWidth;
      const randomY = Math.random() * universe.offsetHeight;
      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;
    }
  });
  

  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


