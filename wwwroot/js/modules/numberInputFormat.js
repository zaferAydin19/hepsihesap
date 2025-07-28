// assets/js/modules/numberInputFormat.js

export function setupNumberInputFormatting(inputSelector) {
    $(document).on('input', inputSelector, function () {
        let input = $(this);
        let value = input.val();
        value = value.replace(/[^\d]/g, '');
        let formatted = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        input.val(formatted);
    });
}