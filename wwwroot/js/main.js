// assets/js/main.js

import { populateDateSelects } from './modules/dateDataSelect.js';
import { setupLifeFormHandler } from './modules/lifeFormHandler.js';
import { setupStickyNavbar } from './modules/scrollNavbar.js';
import { typeWriterEffect } from './modules/typewritter.js';
import { setupNumberInputFormatting } from './modules/numberInputFormat.js';
import { setupPercentageFormHandler } from './modules/percentageFormHandler.js';
import { setupPercentOfFormHandler } from './modules/percentOfFormHandler.js';

$(function () {
    setupNumberInputFormatting('#numberA');
    setupNumberInputFormatting('#percentVal');
    setupNumberInputFormatting('#numberA2');
    setupNumberInputFormatting('#numberB2');
    setupStickyNavbar();
    populateDateSelects('#birthDay', '#birthMonth', '#birthYear');
    setupLifeFormHandler();
    typeWriterEffect("Haydi Hesaplayalım!", "#typewriter", 100);
    setupPercentageFormHandler();
    setupPercentOfFormHandler();
});