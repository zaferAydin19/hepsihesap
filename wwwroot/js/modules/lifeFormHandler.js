// assets/js/modules/lifeFormHandler.js
import { calculateLifeTime } from './lifeTime.js';

export function setupLifeFormHandler(formSelector = "#lifeForm") {
    $(formSelector).on('submit', function (e) {
        e.preventDefault();

        const day = $('#birthDay').val();
        const month = $('#birthMonth').val();
        const year = $('#birthYear').val();

        // Alanlar boş mu?
        if (!day || !month || !year) {
            $('#result').text('Lütfen gün, ay ve yıl seçin.');
            return;
        }

        // Tarih oluştur
        const birthDateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        const parsedDate = new Date(birthDateStr);

        if (isNaN(parsedDate.getTime())) {
            $('#result').text('Lütfen geçerli bir tarih girin.');
            return;
        }

        let isFirstRender = true;

        function updateLifeTimer() {
            const time = calculateLifeTime(birthDateStr);
            if (!time) return;

            if (isFirstRender) {
                const content = `
                    <hr>
                    <div class="text-success">
                        <p class="display-6">🎉 Bravo!</p>
                        <strong>${time.days.toLocaleString()}</strong> gün,
                        <strong>${time.hours}</strong> saat,
                        <strong>${time.minutes}</strong> dakika,
                        <strong id="liveSeconds">${time.seconds}</strong> saniyedir hayattasın.
                    </div>
                `;
                $('#result').hide().html(content).fadeIn(500);
                isFirstRender = false;
            } else {
                $('#liveSeconds').text(time.seconds);
            }
        }

        updateLifeTimer();
        clearInterval(window.lifeInterval);
        window.lifeInterval = setInterval(updateLifeTimer, 1000);
    });
}
