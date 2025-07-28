// assets/js/main.js

import { populateDateSelects } from './modules/dateDataSelect.js';
import { setupLifeFormHandler } from './modules/lifeFormHandler.js';
import { setupStickyNavbar } from './modules/scrollNavbar.js';
import { typeWriterEffect } from './modules/typewritter.js';
import { setupPercentageFormHandler } from './modules/percentageFormHandler.js';
import { setupPercentOfFormHandler } from './modules/percentOfFormHandler.js';

$(function () {
    setupStickyNavbar();
    populateDateSelects('#birthDay', '#birthMonth', '#birthYear');
    setupLifeFormHandler();
    typeWriterEffect("Hesaplamanın En Kolay Hali!", "#typewriter", 100);
    setupPercentageFormHandler();
    setupPercentOfFormHandler();
});