/**
 * DIGITALITY INVITES - Lógica de Interacción
 * Desarrollado por Jonathan Cortés
 */

document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    // Función para abrir/cerrar
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en cualquier opción (importante en móviles)
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    }));
    
    // 1. Inicializar AOS (Animaciones al hacer scroll)
    AOS.init({
        duration: 1000, // Duración de la animación en ms
        once: true,     // La animación ocurre solo una vez
        offset: 100     // Distancia desde el elemento para activar
    });

    // 2. Efecto del Navbar al hacer Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 13, 13, 0.95)';
            navbar.style.padding = '15px 8%';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(13, 13, 13, 0.8)';
            navbar.style.padding = '20px 8%';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Smooth Scroll para los enlaces de navegación
    const links = document.querySelectorAll('.nav-links a, .hero-btns a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Solo si es un enlace interno
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Ajuste por el alto del navbar
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 4. Lógica para los botones de Demo (Opcional)
    // Puedes agregar una validación o un tracking de clics aquí
    const demoButtons = document.querySelectorAll('.btn-demo');
    demoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("Visualizando demo de invitación...");
        });
    });
});

// Configuración de Partículas (Estilo polvo estelar/celebración)
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#d4af37" }, // Color dorado
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "top", // Las partículas suben como burbujas de champagne
      "random": true,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "bubble" } },
    "modes": { "bubble": { "size": 6, "distance": 100, "duration": 2, "opacity": 0.8 } }
  }
});

