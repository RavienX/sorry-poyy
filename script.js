document.addEventListener('DOMContentLoaded', () => {
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    const message3 = document.getElementById('message3');

    const showMessage = (element, delay) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }, delay);
    };

    const hideMessage = (element, delay) => {
        setTimeout(() => {
            element.style.transform = 'translateY(-100vh)';
            element.style.transition = 'transform 1s ease-in-out';

            setTimeout(() => {
                element.classList.remove('visible');
                element.classList.add('hidden');
            }, 1000);
        }, delay);
    };

    showMessage(message1, 500);
    hideMessage(message1, 3000);
    showMessage(message2, 4000);
    hideMessage(message2, 7000);
    showMessage(message3, 8000);
});

