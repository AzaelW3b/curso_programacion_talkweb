//Obtener los campos
const nombreEmpresa = document.querySelector('#nombre-empresa')
const fechaInicio = document.querySelector('#fecha-inicio')
const fechaFin = document.querySelector('#fecha-fin')
const totalVentas = document.querySelector('#total-ventas')
const costoVentas = document.querySelector('#costo-ventas')
const formulario = document.querySelector('.formulario')
const utilidadBrutaContenedor = document.querySelector('.utilidadBrutaContenedor')

// Object literal, estado
const utilidadBruta = {
    nombreEmpresa: '',
    fechaInicio: '',
    fechaFin: '',
    totalVentas: 0,
    costoVentas: 0,
    utilidadBrutaTotal: 0,
}

nombreEmpresa.addEventListener('change', (e)=> {
    utilidadBruta.nombreEmpresa = e.target.value
})
fechaInicio.addEventListener('change', (e) => {
    utilidadBruta.fechaInicio = e.target.value

})

fechaFin.addEventListener('change', (e) => {
    utilidadBruta.fechaFin = e.target.value
})


totalVentas.addEventListener('change', (e) => {
    utilidadBruta.totalVentas = Number(e.target.value)
})

costoVentas.addEventListener('input', (e) => {
    utilidadBruta.costoVentas = Number(e.target.value)
    renderUtilidadBruta()

})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    const { nombreEmpresa, fechaInicio, fechaFin } = utilidadBruta
    if (nombreEmpresa === '' || fechaInicio === ''  ||  fechaFin === '') {
        console.log('Todos los campos son obglitarios')    
        return
    }
    console.log(utilidadBruta)
  
})

const renderUtilidadBruta = ()=> {
    const {totalVentas, costoVentas} = utilidadBruta
    if (totalVentas >= 0 && costoVentas >= 0 && !isNaN(totalVentas) 
    && !isNaN(costoVentas)) {
        const resultado = totalVentas - costoVentas
        // Number method
        utilidadBrutaContenedor.textContent = resultado.toLocaleString(
            "es-Mx", {
                style: "currency",
                currency: "MXN"
            }
        )
        utilidadBruta.utilidadBrutaTotal = resultado
        console.log('El resultado es', resultado)
    
    }
}

console.log(formulario)