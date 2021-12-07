let intro = document.querySelector('.splash-content');
let logo_header = document.querySelector('.splash-header');
let logo = document.querySelectorAll('.splash_logo');

window.addEventListener('DOMContentLoaded', () => {


  setTimeout(() => {
    setTimeout(() => {
      intro.classList.add('fade');
      // intro.style.top='100vh';
    }, 12100)
    setTimeout(() => {
      intro.classList.add('remove');
      // intro.style.top='100vh';
    }, 12400)
  })
})

