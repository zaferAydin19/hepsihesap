// assets/js/modules/dateDataSelect.js

export function populateDateSelects(daySelector, monthSelector, yearSelector, minYear = 1930) {
    const $day = $(daySelector);
    const $month = $(monthSelector);
    const $year = $(yearSelector);
    const currentYear = new Date().getFullYear();

    // Gün
    $day.empty();
    $day.append('<option value="">Gün</option>');
    for (let i = 1; i <= 31; i++) {
        $day.append(`<option value="${i}">${i}</option>`);
    }

    // Ay
    $month.empty();
    $month.append('<option value="">Ay</option>');
    for (let i = 1; i <= 12; i++) {
        $month.append(`<option value="${i}">${i}</option>`);
    }

    // Yıl
    $year.empty();
    $year.append('<option value="">Yıl</option>');
    for (let y = currentYear; y >= minYear; y--) {
        $year.append(`<option value="${y}">${y}</option>`);
    }
}
