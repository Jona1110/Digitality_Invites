document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // Cuenta regresiva simple
    const countdown = () => {
        const countDate = new Date("August 22, 2026 12:00:00").getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

        if (document.getElementById('days')) {
            document.getElementById('days').innerText = Math.floor(gap / day);
            document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
            document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
        }
    };
    setInterval(countdown, 1000);

    // Partículas (Solo si existe el div)
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 50 },
                "color": { "value": "#d4af37" },
                "size": { "value": 3 }
            }
        });
    }
});