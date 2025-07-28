// assets/js/modules/typewriter.js

export function typeWriterEffect(text, selector, speed = 100) {
    const $target = $(selector);
    $target.text("");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            $target.append(text.charAt(index));
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}
