document.addEventListener('DOMContentLoaded', () => {
    // --- Typing Effect ---
    const texts = ["IT Student", "Junior Web Developer", "Software Learner", "Computer Hardware Builder"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    const typingElement = document.getElementById('typing-text');

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];

        if (typingElement) {
            letter = currentText.slice(0, ++index);
            typingElement.textContent = letter;

            if (letter.length === currentText.length) {
                setTimeout(erase, newTextDelay);
            } else {
                setTimeout(type, typingDelay);
            }
        }
    }

    function erase() {
        if (typingElement) {
            letter = currentText.slice(0, --index);
            typingElement.textContent = letter;

            if (letter.length === 0) {
                count++;
                setTimeout(type, typingDelay + 1100);
            } else {
                setTimeout(erase, erasingDelay);
            }
        }
    }

    if (typingElement) {
        setTimeout(type, newTextDelay + 250);
    }
    // ---------------------

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'var(--nav-bg)';
                navLinks.style.padding = '2rem';
                navLinks.style.textAlign = 'center';
            }
        });
    }

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Simple Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.project-card, .skill-card, .about-text, .contact-form');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CSS class for the visible state
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
});
