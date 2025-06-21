const footerCopy = document.querySelector('.footer__copy')
const todosLosEnlaces = document.querySelectorAll('a')
const fechaActual = new Date()

// footerCopy.textContent = " HOLA"
footerCopy.textContent = `© ${fechaActual.getFullYear()} - Talkweb. Todos los derechos reservados`

console.log(footerCopy)
console.log(fechaActual)
console.log(todosLosEnlaces)

todosLosEnlaces.forEach(enlace => {
    enlace.textContent = 'modificado'
    console.log(enlace)
})