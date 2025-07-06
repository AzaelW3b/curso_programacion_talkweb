// Mostrar u Ocultar
const btnNuevoEstadoResultados = document.querySelector('.btn__estados__resultados')
const tabla = document.querySelector('.contenedor__app')
const btnCancelar = document.querySelector('.btn-cancelar')
const estadosResultadosTable = document.querySelector('.tableResultados')

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

let estadosResultados = JSON.parse(localStorage.getItem('estadoResultado')) || [];

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

btnNuevoEstadoResultados.addEventListener('click', ()=> {
    tabla.classList.add('ocultar')
    formulario.classList.remove('ocultar')
})
btnCancelar.addEventListener('click', ()=> {
    formulario.reset()
    formulario.classList.add("ocultar")
    tabla.classList.remove("ocultar")
})

// nombreEmpresa.addEventListener('change', (e)=> {
//     utilidadBruta.nombreEmpresa = e.target.value
// })
// fechaInicio.addEventListener('change', (e) => {
//     utilidadBruta.fechaInicio = e.target.value

// })

// fechaFin.addEventListener('change', (e) => {
//     utilidadBruta.fechaFin = e.target.value
// })


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
})


// Eliminar conceptos de costos operativos

listaCostosBody.addEventListener('click', (e)=> {
    if (e.target.classList.contains('delete')) {
        const tr = e.target.parentElement.parentElement
        const valor = Number(tr.children[1].textContent)
        // Array method, filtramos por los que sean diferentes
        // del que estamos clickando, o sea lo elimina de manera lógica.
        costosOperativos = costosOperativos.filter(
            costo => costo.valor !== valor
        )
        tr.remove()
        // actualizamos el total
        const resultado = costosOperativos.reduce((sum, elemento) => sum + elemento.valor, 0 )
        totalCostOperativoContainer.textContent = formatMoneda(resultado)
        totalesCostos.totalCostosOperativos = resultado
    }
})






depreciacion.addEventListener('input', (e)=> {
   const suma = totalesCostos.totalCostosOperativos + Number(e.target.value)
   gastosOperativosContainer.textContent = `${formatMoneda(suma)}`
   totalesCostos.gastosOperativos = suma
})

costosFinancieros.addEventListener('change', (e)=> {
    totalesCostos.costosFinancieros = Number(e.target.value)
    const utilidadAntesImpuestos = utilidadBruta.utilidadBrutaTotal - totalesCostos.gastosOperativos -  totalesCostos.costosFinancieros
    utilidadAntesDeImpuestosElement.textContent = `${formatMoneda(utilidadAntesImpuestos)}`
    
    const impuestos = (utilidadAntesImpuestos * 0.3) || 0
    
    totalImpuestos.textContent = `${formatMoneda(impuestos)}`
    const utilidadNetaTotal = utilidadAntesImpuestos - impuestos
    utilidadNeta.textContent = `${formatMoneda(utilidadNetaTotal)}`

})



formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nombreEmpresa.value === '' || fechaInicio.value === ''  ||  fechaFin.value === '') {
        console.log('Todos los campos son obglitarios')    
        return
    }

    const estadoResultado = {
        nombreEmpresa: nombreEmpresa.value,
        fechaInicio: fechaInicio.value,
        fechaFin: fechaFin.value,
        utilidadBrutaTotal: Number(utilidadBruta.utilidadBrutaTotal),
        totalCostosOperativos: Number(totalesCostos.totalCostosOperativos),
        // expresion regular
        utilidadAntesImpuestos: Number(utilidadAntesDeImpuestosElement.textContent.replace(/[^0-9.-]+/g,"")),
        totalImpuestos: Number(totalImpuestos.textContent.replace(/[^0-9.-]+/g,"")),
        utilidadNeta: Number(utilidadNeta.textContent.replace(/[^0-9.-]+/g,""))
    }

    
  estadosResultados.push(estadoResultado)          
  localStorage.setItem('estadoResultado',
                       JSON.stringify(estadosResultados))
    pintarEstado(estadoResultado, estadosResultados.length - 1)
    formulario.reset()
    listaCostosBody.innerHTML = ''
    costosOperativos = []
    utilidadBrutaContenedor.textContent = formatMoneda(0)
    formulario.classList.add("ocultar")
    tabla.classList.remove("ocultar")
  
})

const renderUtilidadBruta = ()=> {
    const {totalVentas, costoVentas} = utilidadBruta
    if (totalVentas >= 0 && costoVentas >= 0 && !isNaN(totalVentas) 
    && !isNaN(costoVentas)) {
        const resultado = totalVentas - costoVentas
        // Number method
        utilidadBrutaContenedor.textContent = formatMoneda(resultado)
        utilidadBruta.utilidadBrutaTotal = resultado
    
    }
}

// Arrancamos la aplicación y se muestra la tabla

(function () {
    // const estadosResultado = JSON.parse(localStorage.getItem("estadoResultado")) || []
    // el arreglo tiene minimo un elemento
    if (estadosResultados.length > 0) {
        estadosResultados.forEach((estado, index) => {
            const tr = document.createElement('tr')
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${estado.nombreEmpresa}</td>
                <td>${estado.fechaInicio}</td>
                <td>${estado.fechaFin}</td>
                <td>${formatMoneda(estado.utilidadBrutaTotal)}</td>
                <td>${formatMoneda(estado.totalCostosOperativos)}</td>
                <td>${formatMoneda(estado.utilidadAntesImpuestos)}</td>
                <td>${formatMoneda(estado.totalImpuestos)}</td>
                <td>${formatMoneda(estado.utilidadNeta)}</td>
                <td>
                    <button type="button" class="delete-btn" data-index="${index}">Eliminar</button>
                </td>
            `
            estadosResultadosTable.appendChild(tr)
        })
    }
})()

// Eliminar elementos de la tabla principal
estadosResultadosTable.addEventListener('click', (e) => {
       if(!e.target.matches(".delete-btn")) return
        // si, si existe:
        // obtener el indice de la fila a borrar
        const idx = Number(e.target.dataset.index)
        if (!confirm("Seguro que deseas eliminar este estado de resultados?")) return
        // Leer, quitar y guardar de nuevo en el localStorage
        const lista = JSON.parse(localStorage.getItem("estadoResultado")) || []
        lista.splice(idx, 1)

        // actualizamos
        localStorage.setItem("estadoResultado", JSON.stringify(lista))

        // borramos del DOM
        e.target.closest("tr").remove();

        // Renumerar filas y actualiza el data-index de los elementos que quedan
        // Estamos haciendo todo en una sola instrucción
        [...estadosResultadosTable.querySelectorAll("tr")].forEach((tr, i) => {
            const celdas = tr.children
            // primera celda = numerador #
            if (celdas.length) celdas[0].textContent = i + 1

            const btn = tr.querySelector(".delete-btn")
            if (btn) btn.dataset.index = i
        })

        if (lista.length === 0) {
            const tr = document.createElement("tr")
            tr.innerHTML = `<td colspan="10"> No hay estados de resultados guardados </td>`
            estadosResultadosTable.appendChild(tr)
        }


})


function pintarEstado(estado, index) {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${estado.nombreEmpresa}</td>
    <td>${estado.fechaInicio}</td>
    <td>${estado.fechaFin}</td>
    <td>${formatMoneda(estado.utilidadBrutaTotal)}</td>
    <td>${formatMoneda(estado.totalCostosOperativos)}</td>
    <td>${formatMoneda(estado.utilidadAntesImpuestos)}</td>
    <td>${formatMoneda(estado.totalImpuestos)}</td>
    <td>${formatMoneda(estado.utilidadNeta)}</td>
    <td>
      <button type="button" class="delete-btn" data-index="${index}">Eliminar</button>
    </td>
  `;

  estadosResultadosTable.appendChild(tr);
}


// helpers, hoisting
function  formatMoneda (valor)  {
    if (typeof valor !== 'number') {
        throw new Error("El valor debe ser un número")
    }
    return valor.toLocaleString('es-MX',{
        style: "currency",
        currency: "MXN"
    })

}


