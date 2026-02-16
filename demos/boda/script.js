// Inicializar AOS (Animaciones)
AOS.init({ duration: 1200, once: true });

// Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1200);
});

// Contador Regresivo
const eventDate = new Date("March 27, 2026 18:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    
    const countDiv = document.getElementById('countdown');
    if(countDiv) {
        countDiv.innerHTML = `
            <div class="count-item"><span>${d}</span>Días</div>
            <div class="count-item"><span>${h}</span>Hrs</div>
            <div class="count-item"><span>${m}</span>Min</div>
            <div class="count-item"><span>${s}</span>Seg</div>`;
    }
}, 1000);

// Partículas Doradas Estilo Lujo
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 90, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#ffd700" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 1, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "bubble": { "distance": 100, "size": 5, "duration": 2, "opacity": 0.8, "speed": 3 } }
    },
    "retina_detect": true
});