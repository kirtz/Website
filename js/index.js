// Navigation Button

const navigationToggle = document.querySelector('.navigation-toggle');

// Navigation buton links 

const navigationLinks = document.querySelectorAll('.navigation__link')

navigationToggle.addEventListener('click', () => {
    document.body.classList.toggle('navigation-open');
});

navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('navigation-open');
    });
});
