// assets/js/modules/percentOfFormHandler.js

import { percentOf } from './percentOfCalc.js';

export function setupPercentOfFormHandler(formSelector = '#percentOfForm', resultSelector = '#percentOfResult') {
    $(formSelector).on('submit', function (e) {
        e.preventDefault();

        const a = parseFloat($('#numberA2').val());
        const b = parseFloat($('#numberB2').val());

        if (isNaN(a) || isNaN(b)) {
            $(resultSelector).text('Lütfen iki sayıyı da girin.');
            return;
        }
        if (b === 0) {
            $(resultSelector).html('<div class="alert alert-danger mb-0">B sayısı sıfır olamaz.</div>');
            return;
        }

        const result = percentOf(a, b);
        $(resultSelector).html(
            `<div class="alert alert-primary mb-0">` +
            `<b>${a.toLocaleString('tr-TR')}</b> sayısı, <b>${b.toLocaleString('tr-TR')}</b> sayısının ` +
            `<strong class="display-6">%${result}</strong>'idir.` +
            `</div>`
        );
    });
}
