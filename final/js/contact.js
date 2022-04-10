
const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

function thanksPage() {
    window.location.href="https://oliviacantwell.github.io/wdd230/final/thanks.html";
}