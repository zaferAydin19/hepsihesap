// assets/js/modules/lifeTime.js

export function calculateLifeTime(birthDateStr) {
    const birthDate = new Date(birthDateStr);
    const now = new Date();

    if (isNaN(birthDate.getTime())) {
        return null;
    }

    const diffMilliseconds = now - birthDate;
    const totalSeconds = Math.floor(diffMilliseconds / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
}
