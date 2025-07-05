//Obtener los campos
const nombreEmpresa = document.querySelector('#nombre-empresa')
const fechaInicio = document.querySelector('#fecha-inicio')
const fechaFin = document.querySelector('#fecha-fin')
// Utilidad bruta
const totalVentas = document.querySelector('#total-ventas')
const costoVentas = document.querySelector('#costo-ventas')
const formulario = document.querySelector('.formulario')
const utilidadBrutaContenedor = document.querySelector('.utilidadBrutaContenedor')

// Costos operativos
const costoOperativoNombre = document.querySelector('#costo-operativo-nombre')
const costoOperativoValor = document.querySelector('#costo-operativo-valor')
const botonCostoOperativo = document.querySelector('#add-costo-operativo-btn')

const listaCostos = document.querySelector('.lista-costos')

const listaCostosBody = document.querySelector('#lista-costos-body')
const totalCostOperativoContainer = document.querySelector('#total-costo-operativo')
// Depreciación
const depreciacion = document.querySelector('#depreciacion')

// costos financieros
const costosFinancieros = document.querySelector('#costos-financieros')

// gastos operativos
const gastosOperativosContainer = document.querySelector('#gastos-operativos')

// utilidad antes des impuestos
const utilidadAntesDeImpuestosElement = document.querySelector('#utilidad-antes-impuestos')

// total de impuestos 
const totalImpuestos = document.querySelector('#total-impuestos')

// utilidad neta
const utilidadNeta = document.querySelector('#utilidad-neta')

let costosOperativos = []

// Object literal, estado
const utilidadBruta = {
    nombreEmpresa: '',
    fechaInicio: '',
    fechaFin: '',
    totalVentas: 0,
    costoVentas: 0,
    utilidadBrutaTotal: 0,
}



const totalesCostos = {
    totalCostosOperativos: 0,
    gastosOperativos: 0,
    costosFinancieros: 0
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


botonCostoOperativo.addEventListener('click', (e) => {
    const nombre = costoOperativoNombre.value
    const valor = costoOperativoValor.value

    if (nombre === '' || valor === '') {
        console.log('Todos los campos son obligatorios')
        return
    }

    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td>${nombre}</td>
        <td>${valor.toLocaleString("es-Mx", { style: "currency", currency: "MXN" })}</td>
        <td> 
            <button type="button" class="delete">x</button>
        </td>
    `
    listaCostosBody.appendChild(tr)
    costosOperativos.push({nombre, valor: Number(valor)})
    costoOperativoNombre.value = ""
    costoOperativoValor.value = ""

    // sumar todos los criterios
    const resultado = costosOperativos.reduce((sum, elemento) => sum + elemento.valor, 0)
    totalCostOperativoContainer.textContent = formatMoneda(resultado)
    totalesCostos.totalCostosOperativos = resultado
    console.log(resultado)

   
})

depreciacion.addEventListener('input', (e)=> {
   const suma = totalesCostos.totalCostosOperativos + Number(e.target.value)
   gastosOperativosContainer.textContent = `${formatMoneda(suma)}`
})

costosFinancieros.addEventListener('change', (e)=> {
    totalesCostos.costosFinancieros = Number(e.target.value)
    console.log('costos financieros', Number(e.target.value))
    const utilidadAntesImpuestos = utilidadBruta.utilidadBrutaTotal - totalesCostos.totalCostosOperativos -  totalesCostos.costosFinancieros
    console.log(utilidadAntesImpuestos)
    console.log(totalesCostos)
    utilidadAntesDeImpuestosElement.textContent = `${formatMoneda(utilidadAntesImpuestos)}`
    
    const impuestos = (utilidadAntesImpuestos * 0.3) || 0
    
    totalImpuestos.textContent = `${formatMoneda(impuestos)}`
    const utilidadNetaTotal = utilidadAntesImpuestos - impuestos
    utilidadNeta.textContent = `${formatMoneda(utilidadNetaTotal)}`

    console.log(impuestos)
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
        utilidadBrutaContenedor.textContent = formatMoneda(resultado)
        utilidadBruta.utilidadBrutaTotal = resultado
        console.log('El resultado es', resultado)
    
    }
}

// helpers

const formatMoneda = (valor) => {
    if (typeof valor !== 'number') {
        throw new Error("El valor debe ser un número")
    }
    return valor.toLocaleString('es-MX',{
        style: "currency",
        currency: "MXN"
    })

}

console.log(formulario)