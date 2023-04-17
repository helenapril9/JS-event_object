const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });
    
    const links = listElement.querySelectorAll('.dropdown__link');
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            listElement.classList.remove('dropdown__list_active');     
            valueElement.textContent = link.textContent;
        });
    });
});