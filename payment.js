cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active-card'));
        card.classList.add('active-card');
    });
});
