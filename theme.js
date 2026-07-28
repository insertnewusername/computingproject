
var body = document.body;  /* Targets document body */
document.getElementById('toggler').addEventListener('change', (event) => {
  event.target.checked ? body.setAttribute('data-theme', 'dark') /* If checked, set datatheme to dark */ : body.removeAttribute('data-theme'); /* if unchecked, remove dark datatheme (changes to light default) */
});




/* CAROUSEL LOGIC */

let slideIndex = 1;
showslides(slideIndex);

function plusslides(n) {
  showslides(slideIndex += n);
}

function currentslide(n) {
  showslides(slideIndex = n);
}

function showslides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}