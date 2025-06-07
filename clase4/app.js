//OBJECT LITERAL

// spread operator, shallow copy copia superficial o poco profunda
// const persona = {
//     nombre: "Azael",
//     apellidos: "Garcia Jaimes",
//     edad: 26,
//     direccion: {
//         colonia: "Lomas del valle",
//         codigoPostal: "91698",
//         calle: "Rio lomas",
//         numeroExterior: "200",
//         zonaGeografica: {
//             pais: "México",
//             estado: "Veracruz"
//         }
//     }
// }

//spread operator
// const objetoCopia = {...persona}
// const objetoCopiaProfunda = structuredClone(persona)
// objetoCopia.direccion.zonaGeografica.estado = "CDMX"
// objetoCopiaProfunda.direccion.zonaGeografica.pais = "CANADA"

// console.log(persona)

// console.log(objetoCopiaProfunda)

// console.log('ORIGINAL', persona)

// Arreglos 
// console.log(meses.length)

// acceder al valor de un arreglo
// console.log(meses[2])

// const fechaActual = new Date()
// console.log(fechaActual.getFullYear())
// console.log(`Todos los derechos reservados ${fechaActual.getFullYear()} \u00A9 Talkweb`) // ALT + 96

// console.log(fechaActual.getMonth())

// console.log(fechaActual.getDay() + 1)

// console.log(`Hola bienvenido,último inicio de sesión: ${fechaActual.getDay() + 1}/${meses[fechaActual.getMonth()]}/${fechaActual.getFullYear()}`)

// console.log("HOLA BIENVENIDO" + " "+(fechaActual.getDay()+ 1)+ "/" +""+meses[fechaActual.getMonth()]+"/"+fechaActual.getFullYear())



// ciclos comunes
// for (let i = 0; i < meses.length; i++ ) {
//     console.log(meses[i])
//   // i = 0
//   // i = 1
//   // i = 2
//   // i = 3
// }

// for (const iterador of meses) {
//     console.log(iterador)
// }

// ARRAY METHODS

const meses = [
    "Enero", // 0
    "Febrero", // 1
    "Marzo", // 2
    "Abril", // 3
    "Mayo",// 4
    "Junio", // 5
    "Julio",// 6
    "Agosto", // 7
    "Septiembre", // 8
    "Octubre",// 9
    "Noviembre", // 10
    "Diciembre"// 11
]

// meses.forEach( mes => {
//     console.log(mes)
// })

// meses.map(mes => {
//     console.log('mes map', mes)
// })

// DIFERENCIA DE FOR EACH y MAP

// const todosLosMeses = meses.map((mes, i) => `${i + 1}.-${mes}`)
// const todosLosMeses2 = meses.forEach(mes => mes)
// console.log(todosLosMeses)
// console.log(meses)
// console.log(todosLosMeses2)

let carrito = []

const producto1 = {
    id: 1,
    nombre: "Laptop",
    precio: 11000,
    cantidad: 1
}

const producto2 = {
    id: 2,
    nombre: "Mouse Gamer",
    precio: 1200,
    cantidad: 1
}

const producto3 = {
    id: 3,
    nombre: "Tapate gamer",
    precio: 100,
    cantidad: 1
}

// agregar elementos a un arreglo
// carrito.push(producto1)
// carrito.push(producto2)
carrito = [...carrito, producto1, producto2]
carrito = [...carrito, producto3]
//editar
carrito = carrito.map( producto =>
    producto.id === 1 ? { ...producto, nombre: "Laptop Gamer" } : producto
)
// eliminar
carrito = carrito.filter( producto => producto.precio < 10000 )
console.log(carrito)