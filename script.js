function showPage(id) {
    // Скрываем все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    // Показываем нужную
    const target = document.getElementById('page-' + id);
    if(target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Инициализация отзывов
function initReviews() {
    const tracks = ['track-1', 'track-2'];
    const texts = [
        "Тараканы ушли навсегда!",
        "Очень доволен сервисом.",
        "Профессионально и быстро.",
        "Лучшая цена в Москве.",
        "Мастер приехал вовремя."
    ];

    tracks.forEach(trackId => {
        const track = document.getElementById(trackId);
        if(!track) return;
        for(let i=0; i<22; i++) {
            const card = document.createElement('div');
            card.className = 'rev-card';
            card.innerHTML = `<div style="color:var(--yellow)">★★★★★</div><p style="font-size:13px">"${texts[Math.floor(Math.random()*texts.length)]}"</p>`;
            track.appendChild(card);
        }
        track.innerHTML += track.innerHTML;
    });
}

document.addEventListener('DOMContentLoaded', initReviews);

function openOrderModal(service, placeholder) {
    document.getElementById('selected-service-name').innerText = service.toUpperCase();
    document.getElementById('dynamic-detail').placeholder = placeholder;
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('order-form-step').style.display = 'block';
    document.getElementById('order-success-step').style.display = 'none';
}

function submitFinalOrder() {
    document.getElementById('order-form-step').style.display = 'none';
    document.getElementById('order-success-step').style.display = 'block';
}
