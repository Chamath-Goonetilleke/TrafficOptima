
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

 
  function handleScroll() {
    var documentsSection = document.getElementById('documents-section');
    var leftBoxes = documentsSection.querySelector('.row-left');
    var rightBoxes = documentsSection.querySelector('.row-right');
    var presentationsSection = document.querySelector('.Presentations');
   var presentationBoxes = presentationsSection.querySelectorAll('.box');

    if (isElementInViewport(documentsSection)) {
      leftBoxes.classList.add('animate-left');
    rightBoxes.classList.add('animate-right');

    
    leftBoxes.classList.remove('hidden');
    rightBoxes.classList.remove('hidden');
    }
    if (isElementInViewport(presentationsSection)) {
  presentationBoxes.forEach(function (box, index) {
    setTimeout(function () {
      box.classList.remove('hide-box');
      box.classList.add('slide-in');
    }, index * 100); 
  });
}
  }
  
  

  window.addEventListener('scroll', handleScroll);

  
  handleScroll();