// Cambiar texto y timing sin cotorros animados
const mainText = document.getElementById('mainText');
const homeBtn = document.querySelector('.container .btn');

if (mainText && homeBtn) {
    homeBtn.style.opacity = '0';
    homeBtn.style.pointerEvents = 'none';
    homeBtn.style.transition = 'opacity 0.6s ease';

    mainText.textContent = 'Viaje de Integración';
    mainText.style.fontFamily = "'Original Surfer', cursive";

    // 1.2s después cambio a Cozumel 2026
    setTimeout(() => {
        mainText.textContent = 'Cozumel 2026';
        mainText.style.fontFamily = "'Seaweed Script', cursive";

        // 0.5s después aparece el botón
        setTimeout(() => {
            homeBtn.style.opacity = '1';
            homeBtn.style.pointerEvents = 'auto';
        }, 1000);
    }, 1500);
}

// Modal for itinerary
const modal = document.getElementById('itineraryModal');
const openBtn = document.getElementById('openItinerary');
const closeBtn = document.querySelector('.close');
const prevDayBtn = document.getElementById('prevDay');
const nextDayBtn = document.getElementById('nextDay');
const pagerCounter = document.getElementById('pagerCounter');
const timelineDays = Array.from(document.querySelectorAll('.timeline-day'));
const dots = Array.from(document.querySelectorAll('.dot'));
let currentDay = 0;

function updateItineraryDay(index) {
    if (!timelineDays.length) {
        return;
    }

    currentDay = index;

    timelineDays.forEach((day, dayIndex) => {
        day.classList.toggle('is-active', dayIndex === currentDay);
    });

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === currentDay);
    });

    if (pagerCounter) {
        pagerCounter.textContent = `${currentDay + 1} / ${timelineDays.length}`;
    }

    if (prevDayBtn) {
        prevDayBtn.disabled = currentDay === 0;
    }

    if (nextDayBtn) {
        nextDayBtn.disabled = currentDay === timelineDays.length - 1;
    }
}

if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
        updateItineraryDay(0);
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
}

if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    });
}

if (modal) {
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });
}

if (prevDayBtn) {
    prevDayBtn.addEventListener('click', () => {
        if (currentDay > 0) {
            updateItineraryDay(currentDay - 1);
        }
    });
}

if (nextDayBtn) {
    nextDayBtn.addEventListener('click', () => {
        if (currentDay < timelineDays.length - 1) {
            updateItineraryDay(currentDay + 1);
        }
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateItineraryDay(index);
    });
});

updateItineraryDay(0);