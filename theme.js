
var body = document.body;  /* Targets document body */
document.getElementById('toggler').addEventListener('change', (event) => {
  event.target.checked ? body.setAttribute('data-theme', 'dark') /* If checked, set datatheme to dark */ : body.removeAttribute('data-theme'); /* if unchecked, remove dark datatheme (changes to light default) */
});
