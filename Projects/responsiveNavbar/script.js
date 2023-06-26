const toggleBtn = document.querySelector('.togglee_btn')
const toggleBtnIcon = document.querySelector('toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa fa-solid fa-xmark'
        : 'fa fa-solid fa-bars'
}