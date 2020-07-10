const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('mobile-nav');
const closer = document.querySelector('.close');

hamburger.addEventListener('click', (e) => {
    e.preventDefault
    console.log(1)
    nav.style.display = 'flex'
})

closer.addEventListener('click', () => {
    nav.style.display = 'none'
})

