// Clase 3: Function declaration, function expression, hoisting y objetos
// Autor: Azael Garcia Jaimes - Líder técnico | Talkweb  

//  Una *Function Declaration* se declara al inicio del programa cuando
// el motor de javascript lee el archivo. Eso significa que podemos invocarla antes de
// haberla escrito físicamente
console.log("precio con iva (declaration)", precioConIva(100)) // Funciona

// Declaramos la función *después* de la llamada anterior.
function precioConIva (subtotal, iva = 0.16) {
  // 💡 Regresa el subtotal + IVA. El 0.16 equivale al 16 %.
  return subtotal + (subtotal * iva)
}

/****************************************************
 * 2. Function Expression (Arrow) & Diferencias clave
 ****************************************************/
//  Una *Function Expression* se guarda en una variable. La variable SÍ se crea
// durante el hoisting, pero su valor es *undefined* hasta que la línea que la
// define se ejecuta! Por eso NO podemos usarla antes.

// console.log(precioConIva2(200)) //  Esto falla: "precioConIva2 is not a function"

// Ahora sí la definimos; a partir de aquí podemos usarla.
const precioConIva2 = (subtotal, iva = 0.30) => subtotal + (subtotal * iva)
console.log("precio con iva (expression)", precioConIva2(200)) // Funciona


// - Function Declaration: se escanea COMPLETA - puedes llamarla antes.
// - Function Expression / Arrow: la variable se escanea pero da *undefined*
//   solo se puede llamar después de la asignación.

//ALERTAS NATIVAS

//  Estas líneas disparan ventanas en el navegador. Las dejamos comentadas para
// que no interrumpan la ejecución automática. Descoméntalas si quieres probar.
// alert("HOLA")
// const nombreUsuario = prompt("¿Cuál es tu nombre?")
// console.log("Bienvenido,", nombreUsuario)


// FUNCIONES DE NUMEROS
const numeroString      = "20.2"   // String con decimal
console.log(parseInt(numeroString)) //  20 (entero)

const numeroStringDec   = "20.4"   // Otro string
console.log(parseFloat(numeroStringDec)) //  20.4 (decimal)

const numero = 10
console.log(typeof numero.toString()) // "string" (ahora es texto)


 // Strings y sus propiedades

const nombre   = "Azael"
console.log(nombre.length) //5 caracteres (empieza en 1, no en 0)

// Object Literal y manipulación

const persona = {
  nombre:       "Azael",
  apellidos:    "Garcia Jaimes",
  edad:         26,
  password:     "1231221321321",
  "FOLIO DE LA FACTURA": "019832123"
}

//  Acceso con sintaxis de *corchetes* (útil para llaves con espacios):
console.log(persona["FOLIO DE LA FACTURA"])

// Agregamos nueva propiedad
persona.foto = "imagen.png"

// Borramos la contraseña por seguridad
delete persona.password

console.log("Persona modificada →", persona)


// Destructuring 

const cliente = {
  nombre: "Azael",
  apellidos: "Garcia",
  edad: 26,
  direccion: {
    colonia: "Lomas del Valle",
    codigoPostal: "91699",
    numeroExterior: "200",
    zonaGeografica: {
      pais: "México",
      estado: "Veracruz"
    }
  }
}

// Extraemos piezas del objeto en variables independientes:
const { direccion, direccion: { zonaGeografica: { pais } } } = cliente

console.log("Dirección completa ", direccion)
console.log("País extraído ", pais)
