// SCROL NAVBAR ADD STICKY

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

// Hayatta olunan gün sayısını hesaplayan modüler fonksiyon
function calculateLifeDays(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
        return null;
    }

    const diffTime = today - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

// Form olayını dinleyen ve sonucu işleyen fonksiyon
function setupLifeFormHandler() {
    $('#lifeForm').on('submit', function (e) {
        e.preventDefault();

        const birthDateVal = $('#birthDate').val();
        const daysAlive = calculateLifeDays(birthDateVal);

        if (daysAlive === null) {
            $('#result').text('Lütfen geçerli bir doğum tarihi girin.');
        } else {
            $('#result').html(`
            <hr>
            <span class="text-success">
                Bravo <strong class="bg-warning p-2 rounded">${daysAlive.toLocaleString()}</strong> gündür hayattasın.
            </span>
        `);
        }
    });
}

// Sayfa yüklendiğinde olayları başlat
$(function () {
    setupLifeFormHandler();
});

$(function () {
    const text = "Hesaplamanın En Kolay Hali!";
    const $target = $("#typewriter");
    $target.text(""); // Başlangıçta boşalt
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            $target.append(text.charAt(index));
            index++;
            setTimeout(typeWriter, 100); // yazma hızı
        }
    }

    typeWriter();
});