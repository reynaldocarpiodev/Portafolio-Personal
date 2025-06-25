// Validación y feedback del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alertBox.classList.remove('d-none', 'alert-danger', 'alert-success');
      // Validación simple
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();
      if (!nombre || !email || !mensaje) {
        alertBox.textContent = 'Por favor, completa todos los campos.';
        alertBox.classList.add('alert-danger');
        return;
      }
      // Simulación de envío exitoso
      alertBox.textContent = '¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.';
      alertBox.classList.add('alert-success');
      form.reset();
    });
  }

  // Animación simple para los items del portafolio
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach((item, i) => {
    item.style.opacity = 0;
    setTimeout(() => {
      item.style.transition = 'opacity 0.8s';
      item.style.opacity = 1;
    }, 200 * i);
  });
}); 