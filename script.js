
// Particles JS Configuration
particlesJS('particles-js', {
"particles": {
"number": {
"value": 80,
"density": {
"enable": true,
"value_area": 800
}
},
"color": {
"value": "#00d4ff"
},
"shape": {
"type": "circle",
"stroke": {
"width": 1,
"color": "#000000"
},
"polygon": {
"nb_sides": 10
}
},
"opacity": {
"value": 0.5,
"random": false,
"anim": {
"enable": false,
"speed": 1,
"opacity_min": 0.1,
"sync": false
}
},
"size": {
"value": 3,
"random": true,
"anim": {
"enable": false,
"speed": 40,
"size_min": 0.1,
"sync": false
}
},
"line_linked": {
"enable": true,
"distance": 150,
"color": "#00d4ff",
"opacity": 0.4,
"width": 1.5
},
"move": {
"enable": true,
"speed": 2,
"direction": "none",
"random": false,
"straight": false,
"out_mode": "out",
"bounce": false,
"attract": {
"enable": false,
"rotateX": 600,
"rotateY": 1200
}
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
"onhover": {
"enable": true,
"mode": "grab"
},
"onclick": {
"enable": true,
"mode": "push"
},
"resize": true
},
"modes": {
"grab": {
"distance": 140,
"line_linked": {
"opacity": 1
}
},
"bubble": {
"distance": 400,
"size": 40,
"duration": 2,
"opacity": 8,
"speed": 3
},
"repulse": {
"distance": 200,
"duration": 0.5
},
"push": {
"particles_nb": 4
},
"remove": {
"particles_nb": 2
}
}
},
"retina_detect": true
});

// Typewriter Effect
const typewriterText = "Innovative Minds. Exceptional Solutions...";
const typewriterElement = document.getElementById('typewriter');
let i = 0;

function typeWriter() {
if (i < typewriterText.length) {
typewriterElement.innerHTML += typewriterText.charAt(i);
i++;
setTimeout(typeWriter, 150);
} else {
setTimeout(() => {
typewriterElement.innerHTML = '';
i = 0;
typeWriter();
}, 3000);
}
}

window.onload = function() {
typeWriter();
};

// Scroll Animation for Fade-in Elements
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
threshold: 0.2,
rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
entries.forEach(entry => {
if (!entry.isIntersecting) return;
entry.target.classList.add('show');
appearOnScroll.unobserve(entry.target);
});
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});

// Navbar Scroll Effect & Active Link Highlight
document.addEventListener('DOMContentLoaded', function() {
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar .nav-link');
const sections = document.querySelectorAll('section');
const backToTop = document.querySelector('.back-to-top');

function updateNavbar() {
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled'); 
}

// Show/hide back to top button
if (window.scrollY > 300) {
backToTop.classList.add('show');
} else {
backToTop.classList.remove('show');
}

// Highlight active nav link
let current = '';

sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;
if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
current = section.getAttribute('id');
}
});

navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href').substring(1) === current || 
(current === 'hero' && link.getAttribute('href') === '#hero')) {
link.classList.add('active');
}
});
}

window.addEventListener('scroll', updateNavbar);
updateNavbar();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);

window.scrollTo({
top: targetElement.offsetTop - 70,
behavior: 'smooth'
});
});
});

// Back to top button click
backToTop.addEventListener('click', function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
});

// Form submit animation
document.getElementById('submitBtn').addEventListener('click', function(e) {
e.preventDefault();
const btn = this;
btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

setTimeout(() => {
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');

if (nameInput.value && emailInput.value && messageInput.value) {
btn.innerHTML = '<i class="fas fa-check"></i> Reach you soon';
btn.classList.remove('btn-info');
btn.classList.add('btn-success');

// Reset form fields
nameInput.value = '';
emailInput.value = '';
messageInput.value = '';

setTimeout(() => {
btn.innerHTML = 'Send Message';
btn.classList.remove('btn-success');
btn.classList.add('btn-info');
}, 3000);
} else {
btn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please fill all fields';
btn.classList.remove('btn-info');
btn.classList.add('btn-danger');

setTimeout(() => {
btn.innerHTML = 'Send Message';
btn.classList.remove('btn-danger');
btn.classList.add('btn-info');
}, 3000);
}
}, 1500);
});

// Service card animation
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
card.addEventListener('mouseenter', function() {
card.style.transform = 'translateY(-10px)';
card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
const icon = card.querySelector('.service-icon');
icon.style.transform = 'scale(1.2)';
icon.style.color = '#00ffcc';
});

card.addEventListener('mouseleave', function() {
card.style.transform = 'translateY(0)';
card.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
const icon = card.querySelector('.service-icon');
icon.style.transform = 'scale(1)';
icon.style.color = '#00d4ff';
});
});
