// assets/js/modules/percentOfCalc.js

/**
 * A sayısı, B sayısının yüzde kaçıdır?
 * @param {number} a - A sayısı
 * @param {number} b - B sayısı
 * @returns {string} Türkçe formatta, örn: '22,67'
 */
export function percentOf(a, b) {
    if (b === 0) return "Tanımsız";
    const result = (a / b) * 100;
    return result.toLocaleString('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
