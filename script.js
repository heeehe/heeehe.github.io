document.querySelectorAll('.expandable').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.querySelector('p').classList.remove('hidden');
    });

    item.addEventListener('mouseout', event => {
        item.querySelector('p').classList.add('hidden');
    });
});
