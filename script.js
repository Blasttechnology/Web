// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Optional: Slider functionality (if you add more images to the hero slider later)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('hidden', i !== index);
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Uncomment the following lines if you add multiple images to the slider
// setInterval(nextSlide, 5000);

// Animate elements on scroll using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in-up');
    } else {
      entry.target.classList.remove('animate-fade-in-up');
    }
  });
}, {
  threshold: 0.1
});

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => observer.observe(el));