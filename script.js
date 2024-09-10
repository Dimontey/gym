document.querySelector('.burger').onclick = () => {
    const navlist = document.querySelector('.header-nav');

    navlist.classList.toggle('open');
}