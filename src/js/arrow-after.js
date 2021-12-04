document.querySelectorAll('.date-type').forEach(item => {
    item.addEventListener('focus', (event) => {
        if (event) {
            event.target.parentElement.focus();
        }
    })
})