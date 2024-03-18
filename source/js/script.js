const pageNav = document.querySelector(".page-header__nav");
const buttonMenu = pageNav.querySelector(".page-header__toggle");

pageNav.classList.add("page-header__nav--closed");

buttonMenu.addEventListener('click', function () {
    if (pageNav.classList.contains('page-header__nav--closed')) {
        pageNav.classList.remove("page-header__nav--closed");
        pageNav.classList.add("page-header__nav--opened");
    } else {
        pageNav.classList.remove("page-header__nav--opened");
        pageNav.classList.add("page-header__nav--closed");
    }
});
