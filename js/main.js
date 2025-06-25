// Animación de scroll para secciones
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    const formData = new FormData(contactForm);
    console.log(Object.fromEntries(formData));
    
    // Mostrar mensaje de éxito
    alert('¡Mensaje enviado con éxito!');
    contactForm.reset();
});

// Animación de progreso en habilidades
const progressBars = document.querySelectorAll('.progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('style').split(':')[1];
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    bar.style.width = '0';
    observer.observe(bar);
});

// Animación de portafolio
const portfolioItems = document.querySelectorAll('.portfolio-item');
const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    portfolioObserver.observe(item);
});
