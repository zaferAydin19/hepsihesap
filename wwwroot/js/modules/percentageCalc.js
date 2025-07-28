// assets/js/modules/percentageCalc.js

/**
 * A sayısının yüzdesini hesaplar ve sonucu basamaklı şekilde döner.
 * @param {number} number - Ana sayı (A)
 * @param {number} percent - Yüzde oranı (örn: 15)
 * @returns {string} Sonuç, Türkçe formatlı örn: '1.500,00'
 */
export function calculatePercentage(number, percent) {
    const result = (number * percent) / 100;
    // Türkçe formatlı çıktı için Intl kullanıyoruz
    return result.toLocaleString('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
