function menuExibir() {  
    let menuMobile = document.querySelector('.mobile-menu')

    if(menuMobile.classList.contains('abrir')){
        menuMobile.classList.remove('abrir');
        document.querySelector(".icon-mobile").src ="assets/img/menu_white_36dp.svg";
    }else{
        menuMobile.classList.add('abrir')
        document.querySelector(".icon-mobile").src ="assets/img/close_white_36dp.svg";
    }
}