AOS.init({ duration: 1000, once: true });

// Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 1000);
});

// Contador
const targetDate = new Date("August 15, 2026 16:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = `
        <div style="display:flex; gap:10px; justify-content:center;">
            <div style="background:var(--primary); color:var(--dark); padding:10px; border-radius:8px;">${d}d</div>
            <div style="background:var(--primary); color:var(--dark); padding:10px; border-radius:8px;">${h}h</div>
            <div style="background:var(--primary); color:var(--dark); padding:10px; border-radius:8px;">${m}m</div>
            <div style="background:var(--primary); color:var(--dark); padding:10px; border-radius:8px;">${s}s</div>
        </div>`;
}, 1000);

// Partículas
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#ffd700" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "move": { "enable": true, "speed": 2, "direction": "top" }
    }
});