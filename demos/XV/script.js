document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    // Lógica de Música
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-control');
    
    btn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            btn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            music.pause();
            btn.innerHTML = '<i class="fas fa-music"></i>';
        }
    });

    // Contador (Ajustado a la fecha)
    const targetDate = new Date("August 22, 2026 18:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const diff = targetDate - now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = d;
        document.getElementById('hours').innerText = h;
        document.getElementById('minutes').innerText = m;
        document.getElementById('seconds').innerText = s;
    }, 1000);

    // Partículas modo "Lluvia de Oro"
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 100 },
            "color": { "value": "#d4af37" },
            "opacity": { "value": 0.5, "random": true },
            "size": { "value": 2 },
            "move": { "speed": 2, "direction": "bottom" }
        }
    });
});