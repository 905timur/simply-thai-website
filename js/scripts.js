// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Carousel Navigation
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.toggle('active', i === index);
    });
}

document.querySelector('.carousel-arrow.left').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.carousel-arrow.right').addEventListener('click', () => {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// Mobile Nav Toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img.lazy');

function lazyLoad() {
    lazyImages.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight && image.dataset.src) {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        }
    });
}

window.addEventListener('scroll', lazyLoad);
window.addEventListener('load', lazyLoad);