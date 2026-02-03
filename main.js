// main.js

// Icon beim Laden setzen
document.addEventListener('DOMContentLoaded', () => {
    updateIcon();
    // Kleine Verzögerung, damit CSS Transitions erst nach dem Laden aktiv werden
    // (Verhindert "Reinzoomen" der Farben)
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 200);
});

function toggleDarkMode() {
    const html = document.documentElement;
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    updateIcon();
}

function updateIcon() {
    const icon = document.getElementById('dark-icon');
    if (!icon) return;

    if (document.documentElement.classList.contains('dark')) {
        icon.innerText = '☀️';
    } else {
        icon.innerText = '🌙';
    }
}

function filterRezepte(kategorie) {
    // 1. Alle Karten holen
    const karten = document.querySelectorAll('.rezept-karte');
    
    // 2. Durch alle Karten gehen
    karten.forEach(karte => {
        // Wenn "alle" gewählt ist oder der Tag im Datensatz steht -> Anzeigen
        if (kategorie === 'alle' || karte.dataset.tags.includes(kategorie)) {
            karte.classList.remove('hidden');
        } else {
            // Sonst -> Verstecken
            karte.classList.add('hidden');
        }
    });

    // 3. Buttons Design aktualisieren (Aktiven Button hervorheben)
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.innerText.toLowerCase().includes(kategorie) || (kategorie === 'alle' && btn.innerText === 'Alle')) {
            btn.classList.add('bg-orange-600', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-700', 'dark:bg-gray-800', 'dark:text-gray-300');
        } else {
            btn.classList.remove('bg-orange-600', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700', 'dark:bg-gray-800', 'dark:text-gray-300');
        }
    });
}