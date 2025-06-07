// Clase 4:  Objetos, Arreglos, Array Methods y fundamentos de HTML Y CSS3
// Autor: Azael Garcia Jaimes - Líder técnico | Talkweb  


// -------------------------------------------------------------------
// 1. OBJETO LITERAL
// -------------------------------------------------------------------
// Un "objeto literal" es la forma más directa de crear objetos en JS:
// abrimos llaves y declaramos pares clave‑valor. No necesitamos clases
// ni constructores. Es ideal para agrupar datos relacionados de forma
// rápida y legible.
//
// spread operator, shallow copy  -> copia superficial
// * Copia las propiedades del PRIMER nivel del objeto.
// * Si alguna propiedad apunta a otro objeto (referencia), esa
//   referencia se mantiene; por eso al cambiar la copia también cambia
//   el original en los niveles profundos.
//
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

// -------------------------------------------------------------------
// 2. SPREAD OPERATOR Y COPIAS
// -------------------------------------------------------------------
// El operador spread ( ... ) descompone/expande un objeto o arreglo.
//
// const objetoCopia = { ...persona }            // copia superficial
// const objetoCopiaProfunda = structuredClone(persona) // copia profunda
//
// structuredClone crea un nueva estructura  de datos replicando TODOS los
// niveles. Cambios en la copia NO afectan al original.
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// 3. MÉTODOS FECHA (Date)
// -------------------------------------------------------------------
// new Date() instancia un objeto de fecha/hora basado en el reloj del
// sistema. Luego podemos usar getters como getFullYear(), getMonth(),
// getDay(), etc.
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// 4. ARRAYS Y RECORRIDOS BÁSICOS
// -------------------------------------------------------------------
const meses = [
  "Enero",     // 0
  "Febrero",   // 1
  "Marzo",     // 2
  "Abril",     // 3
  "Mayo",      // 4
  "Junio",     // 5
  "Julio",     // 6
  "Agosto",    // 7
  "Septiembre",// 8
  "Octubre",   // 9
  "Noviembre", //10
  "Diciembre"  //11
]

// Ejemplos de ciclos tradicionales y for...of (comentados para no
// saturar la consola):
// for (let i = 0; i < meses.length; i++) {
//   console.log(meses[i])
// }
// for (const mes of meses) {
//   console.log(mes)
// }
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// 5. MÉTODOS DE ARRAY: forEach vs map
// -------------------------------------------------------------------
// Ambos reciben un callback que se ejecuta una vez por elemento.
//
// 1) forEach -> recorre por cada item del arreglo.
//    • Propósito: efectos secundarios (mostrar, sumar, mutar variables).
//    • NO devuelve nada (retorna undefined). Se utiliza cuando la meta
//      es ejecutar lógica imperativa.
//
// 2) map -> "transforma" cada item y devuélve un nuevo arreglo.
//    • Propósito: generar un NUEVO arreglo con la misma longitud,
//      pero con los valores convertidos (p. ej. strings formateados,
//      números calculados, objetos enriquecidos, etc.).
//    • No modifica el arreglo original; produce uno nuevo.
//
// Pensamiento coloquial:
//   forEach es como pasar lista: "lee cada nombre en voz alta".
//   map es como llenar una hoja nueva: por cada nombre escribes algo
//   en una página aparte y después te quedas con esa nueva lista.
// -------------------------------------------------------------------

// // Demo rápido (descomentarlo si quieres ver la diferencia):
// const resultadoMap = meses.map((mes, i) => `${i + 1}.‑ ${mes}`)
// const resultadoForEach = meses.forEach(mes => mes) // undefined
// console.log(resultadoMap)      // arreglo transformado
// console.log(resultadoForEach)  // undefined

// -------------------------------------------------------------------
// 6. CARRITO DE COMPRAS (EJEMPLO DE INMUTABILIDAD CON spread / map / filter)
// -------------------------------------------------------------------
let carrito = []

const alumnos = [
  { id: 1, nombre: "Luis", califacacion: 10 },
  { id: 2, nombre: "Jesus", califacacion: 8 },
  { id: 3, nombre: "Azael", califacacion: 5 },
  { id: 4, nombre: "Evelin", califacacion: 5 }
]

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

// -------------------------
// AGREGAR ELEMENTOS
// -------------------------
// push() mutaría el arreglo existente. Aquí usamos spread para respetar
// el principio de inmutabilidad (muy útil en React y programación
// funcional): creamos un nuevo arreglo combinando el anterior + nuevos
// productos.
carrito = [...carrito, producto1, producto2]
carrito = [...carrito, producto3]

// -------------------------
// EDITAR ELEMENTOS
// -------------------------
// map() recorre y devuelve un nuevo arreglo. Si la condición se cumple
// se crea un clon del objeto cambiado, de lo contrario se deja tal cual.
carrito = carrito.map(producto =>
  producto.id === 1 ? { ...producto, nombre: "Laptop Gamer" } : producto
)

// -------------------------
// ELIMINAR ELEMENTOS
// -------------------------
// filter() devuelve un nuevo arreglo con los elementos cuyo callback
// retorna true. Aquí filtramos productos menores a $10,000.
carrito = carrito.filter(producto => producto.precio < 10000)

console.log(carrito)
// Resultado final: un carrito SIN mutar el original, manteniendo la
// trazabilidad de cambios paso a paso.
