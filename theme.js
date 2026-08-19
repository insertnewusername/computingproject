<<<<<<< HEAD

var body = document.body;  /* Targets document body */
document.getElementById('toggler').addEventListener('change', (event) => {
  event.target.checked ? darkmode()/* If checked, set datatheme to dark */ : lightmode()/* if unchecked, remove dark datatheme (changes to light default) */
});



function darkmode() {
  document.getElementById("toggleicon").src = "images/Moon.png"
  body.setAttribute('data-theme', 'dark')
}

function lightmode() {
  document.getElementById("toggleicon").src = "images/Sun.png"
   body.removeAttribute('data-theme');
}
 
 

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


=======

var body = document.body;  /* Targets document body */
document.getElementById('toggler').addEventListener('change', (event) => {
  event.target.checked ? darkmode()/* If checked, set datatheme to dark */ : lightmode()/* if unchecked, remove dark datatheme (changes to light default) */
});



function darkmode() {
  document.getElementById("toggleicon").src = "images/moon.png"
  body.setAttribute('data-theme', 'dark')
}

function lightmode() {
  document.getElementById("toggleicon").src = "images/sun.png"
   body.removeAttribute('data-theme');
}
 
 

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


>>>>>>> 515f6ffcba1e8350a547b691a1a1b73f739a346d
