const footerCopy = document.querySelector('.footer__copy')
const fechaActual = new Date()
footerCopy.textContent = `© ${fechaActual.getFullYear()} - Talkweb. Todos los derechos reservados`

// menu hamburguesa

const menuBtn = document.querySelector('.menu')
const nav = document.querySelector('.navegacion')
// Eventos

menuBtn.addEventListener('click', ()=> {
    // toggle boolean
    console.log('Abriendo menu....')
    nav.classList.toggle('navegacion--open')
    menuBtn.classList.toggle('menu--open')
})

nav.querySelectorAll('a').forEach(link=> {
    link.addEventListener('click', () => {
        nav.classList.remove('navegacion--open')
        menuBtn.classList.remove('menu--open')
    })
})