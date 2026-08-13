// ==============================
// MOBILE MENU
// ==============================

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// ==============================
// ACTIVE MENU ON SCROLL
// ==============================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }

    });

});

// ==============================
// STICKY HEADER
// ==============================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    header.classList.toggle('sticky', window.scrollY > 50);

});

// ==============================
// TYPING EFFECT
// ==============================

const typingText = document.querySelector('.typing-text');

const words = [
    'Graphic Designer',
    'Logo Designer',
    'Brand Identity Expert',
    'Social Media Designer',
    'Presentation Designer'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({
                behavior: 'smooth'
            });

            navbar.classList.remove('active');
        }

    });
});


// ==============================
// SIMPLE SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    '.about, .skills, .service, .portfolio, .contact'
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';

        }

    });
}

// initial state
revealElements.forEach(el => {

    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 1s ease';

});

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();








