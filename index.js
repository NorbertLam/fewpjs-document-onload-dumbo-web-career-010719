// Your code goes here

function domContentLoaded() {
  document.addEventListener("DOMContentLoaded", domLoaded, false);
 
  function domLoaded(event) {
    updateDOM();
  }
}

function updateDOM() {
  const text = document.querySelector('p#text');

  text.textContent = "This is really cool!";
}