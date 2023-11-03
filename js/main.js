const inputs = document.querySelectorAll(".input");
const navbar = document.querySelector(".navbar");
const content = document.getElementById("content");
const scrollThreshold = 100;

// Function to handle the scroll event
function handleScroll() {
    const scrollY = window.scrollY || window.pageYYOffset;

    if (scrollY >= scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Add a scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check for the scroll position
handleScroll();

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
