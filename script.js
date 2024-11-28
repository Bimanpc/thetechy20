document.addEventListener('DOMContentLoaded', () => {
    const hair = document.getElementById('hair');

    hair.addEventListener('click', () => {
        hair.style.height = `${Math.max(0, hair.offsetHeight - 10)}px`;
        if (hair.offsetHeight <= 0) {
            alert('Haircut complete!');
        }
    });
});
