// document.addEventListener('DOMContentLoaded', () => {

//     const button = document.querySelector('.menu-btn')
//     const nav = document.querySelector('.burger-menu')
  
//     button.addEventListener('click', () => {
//       nav.classList.toggle('active')
//     })
  
//     window.addEventListener('click', e => {
//       const target = e.target
//       if (!target.closest('.burger-menu') && !target.closest('.menu-btn')) { 
//         nav.classList.remove('active') 
//       }
//     })

//   })

function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let body = document.querySelector('body');
    let button = menu.querySelector('.burger-menu__button');
    let links = menu.querySelectorAll('.burger-menu__items');     //выбираем все пункты меню
    let overlay = menu.querySelector('.burger-menu__overlay');

  button.addEventListener('click', e => {     //клик по кнопке
      e.preventDefault();  
      toggleMenu();
  }); 

//   menu.links.addEventListener('click', e => {     //клик по кнопке
//     e.preventDefault();  
//     toggleMenu();
// }); 
  
 links.forEach(link => link.addEventListener('click', () => toggleMenu()));  // клик по любому пункту меню
  overlay.addEventListener('click', () => toggleMenu());    // клик по оверлею

    function toggleMenu(){
        if (menu.classList.contains('burger-menu__active')) {
            menu.classList.remove('burger-menu__active');
            body.style.overflow = 'visible';
        } else {
            menu.classList.add('burger-menu__active');
            body.style.overflow = 'hidden';
        }
    }
  
    
}
burgerMenu('.burger-menu');

