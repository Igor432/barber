const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');
const hiddenCon = document.getElementById('hidden-con')

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');

})