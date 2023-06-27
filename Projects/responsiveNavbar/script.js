const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

const myfunc = () => {
    dropDownMenu.classList.toggle('open')

    if(dropDownMenu.classList.contains('open')){
        toggleBtnIcon.className = 'fas fa-xmark fa-xl';
    } else {
        toggleBtnIcon.className = 'fa fa-solid fa-bars';
    }
};

toggleBtn.addEventListener("click", myfunc)
