// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation for contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // If all validations pass, you can submit the form or send data to server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Image carousel functionality
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
if (carousel && carouselInner) {
    const items = carouselInner.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function updateCarousel() {
        const transformValue = -currentIndex * 100 + '%';
        carouselInner.style.transform = 'translateX(' + transformValue + ')';
    }

    setInterval(showNextItem, 5000); // Change image every 5 seconds
}

// Fade-in effect for gallery images
const galleryItems = document.querySelectorAll('.gallery-item');
if (galleryItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    galleryItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}