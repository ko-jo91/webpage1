
let menuEL = document.querySelector('.nav__menu')
let hamburgerEl = document.querySelector('.hamburger')

hamburgerEl.addEventListener('click',()=>{
    hamburgerEl.classList.toggle('hamburger__active')
    menuEL.classList.toggle('menu__active')
})

menuEL.addEventListener('click',function(){
     hamburgerEl.classList.remove('hamburger__active')
     menuEL.classList.remove('menu__active')

})
