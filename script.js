// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '&#8679;';
backToTopButton.id = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for animations
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});


const typewriterText = document.querySelector('.hero-content h2');
const textArray = ["Welcome to My Portfolio", "I am a Backend Developer", "Let's Build Something Amazing"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentText = textArray[textIndex];
    typewriterText.textContent = currentText.slice(0, charIndex);

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(type, 150);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 100);
    } else {
        isDeleting = !isDeleting;
        textIndex = !isDeleting ? (textIndex + 1) % textArray.length : textIndex;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', type);
