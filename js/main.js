const inputs = document.querySelectorAll(".input");
const navbar = document.querySelector(".navbar");
const content = document.getElementById("content");
const scrollThreshold = 100;

// Nav contactus
function handleNavScroll() {
    const scrollY = window.scrollY || window.pageYYOffset;

    if (scrollY >= scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavScroll);

handleNavScroll();

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

//milestone
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains("in-view")) {
        items[i].classList.add("in-view");
      }
    } else if (items[i].classList.contains("in-view")) {
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

//downloads
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  var documentsSection = document.getElementById("documents-section");
  var leftBoxes = documentsSection.querySelector(".row-left");
  var rightBoxes = documentsSection.querySelector(".row-right");
  var presentationsSection = document.querySelector(".Presentations");
  var presentationBoxes = presentationsSection.querySelectorAll(".box");

  if (isElementInViewport(documentsSection)) {
    leftBoxes.classList.add("animate-left");
    rightBoxes.classList.add("animate-right");

    leftBoxes.classList.remove("hidden");
    rightBoxes.classList.remove("hidden");
  }
  if (window.innerWidth >= 1200 && isElementInViewport(presentationsSection)) {
    presentationBoxes.forEach(function (box, index) {
      setTimeout(function () {
        box.classList.remove("hide-box");
        box.classList.add("slide-in");
      }, index * 100);
    });
  }else if(isElementInViewport(presentationsSection)){
    presentationBoxes.forEach(function (box, index) {
      setTimeout(function () {
        box.classList.remove("hide-box");
       
      }, index * 100);
    });
  }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener('resize', handleScroll);
handleScroll();
