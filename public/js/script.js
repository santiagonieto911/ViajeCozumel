// Cambiar texto y timing sin cotorros animados
const mainText = document.getElementById('mainText');
const btn = document.querySelector('.btn');

btn.style.opacity = '0';
btn.style.pointerEvents = 'none';
btn.style.transition = 'opacity 0.6s ease';

mainText.textContent = 'Viaje de Integración';
mainText.style.fontFamily = "'Original Surfer', cursive";

// 1.2s después cambio a Cozumel 2026
setTimeout(() => {
    mainText.textContent = 'Cozumel 2026';
    mainText.style.fontFamily = "'Seaweed Script', cursive";

    // 0.5s después aparece el botón
    setTimeout(() => {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    }, 1000);
}, 1500);