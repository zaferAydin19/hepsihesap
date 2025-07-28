// assets/js/modules/percentageFormHandler.js

import { calculatePercentage } from './percentageCalc.js';

export function setupPercentageFormHandler(formSelector = '#percentForm', resultSelector = '#percentResult') {
    $(formSelector).on('submit', function (e) {
        e.preventDefault();

        const numberA = parseFloat($('#numberA').val());
        const percentVal = parseFloat($('#percentVal').val());

        if (isNaN(numberA) || isNaN(percentVal)) {
            $(resultSelector).text('Lütfen geçerli bir sayı ve yüzde değeri girin.');
            return;
        }

        const result = calculatePercentage(numberA, percentVal);
        $(resultSelector).html(
            `<div class="alert alert-success mb-0">` +
            `<b>${numberA.toLocaleString('tr-TR')}</b> sayısının %<b>${percentVal}</b>'i: ` +
            `<strong class="display-6">${result}</strong>` +
            `</div>`
        );
    });
}
