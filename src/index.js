import "./style/style.scss";

// CLICK ON BUTTON DROPDOWN. OPEN / CLOSE THE SELECT
document.querySelector('.dropdown-type').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('hidden');
    document.querySelector('.dropdown-type').classList.add('dropdown-type--active');
});

// ITEM SELECTION FROM LIST. MEMORISE SELECTED ITEM. CLOSE DROPDOWN
document.querySelectorAll('.dropdown-menu__list_item').forEach(function (listItem) {
    listItem.addEventListener('click', function () {
        document.querySelector('.dropdown-type').innerText = this.innerText;
        document.querySelector('.dropdown-type').focus();
        document.querySelector('.dropdown').classList.remove('hidden');
    })
});

