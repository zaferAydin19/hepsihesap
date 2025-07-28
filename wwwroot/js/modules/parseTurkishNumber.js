// assets/js/modules/parseTurkishNumber.js

export function parseTurkishNumber(inputString) {
    if (!inputString) return NaN;
    inputString = inputString.replace(/\./g, '').replace(',', '.');
    return parseFloat(inputString);
}
