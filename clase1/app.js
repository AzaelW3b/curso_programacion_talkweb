// Clase 1: Variables y Tipos de Datos
// Autor: Azael Garcia Jaimes - Líder técnico | Talkweb  

/********************************************************************
 *  EJEMPLO DE VARIABLES Y OPERACIONES BÁSICAS EN JAVASCRIPT
 *  -----------------------------------------------------------------
 *  ¿Qué es una variable?
 *    Una “variable” es un espacio en memoria (ram) al que le damos un nombre para 
 *    guardar información (números, texto, booleanos, etc.) y poder 
 *    usarla más adelante en nuestro programa.  
 *    En JavaScript existen tres formas modernas de declararlas:
 *        • var  →  su referencia puede cambiar (variable)
 *        • const →  su referencia NO cambia (constante)
 *        • let  →  puede reasignarse
 *        
 *
 *   A continuación se muestran ejemplos de declaraciones, strings,
 *    template strings, operaciones numéricas, uso de Math, 
 *    incrementos / decrementos y tipos booleanos.
 *
 *  NOTA: Todo el código real está comentado (//) para que no se 
 *  ejecute automáticamente.  Solo quita las barras para probarlo.
 ********************************************************************/


// ------------------------------------------------------------------
// 1. DECLARAR VARIABLES DE DIFERENTES TIPOS
// ------------------------------------------------------------------

// Cadena de texto (string)
 //const nombre = "Azael"

// Número entero (number)
 //let edad = 26

// Booleano (true / false)
 //const autenticado = false

// Valor nulo (intencionalmente “vacío”)
 //const nulo = null

// Variable indefinida (sin asignar)
 //const undefinedVariable = undefined

// Constante numérica (π)
 //const PI = 3.1416



// ------------------------------------------------------------------
// 2. STRINGS Y MÉTODOS BÁSICOS
// ------------------------------------------------------------------

// Medir la longitud de un string(cadena de texto) (propiedad .length)
 //const numeroTarjetaCredito = "444 4444 4444 4444";
 //console.log(numeroTarjetaCredito.length);  // 19 caracteres

// Template string + métodos de transformación  a minusculas (toLowerCase)
 //const nombre = "AZAEL";
 //const apellido = "Garcia";
 //console.log(`Hola, mi nombre es: ${nombre.toLowerCase()} ${apellido}`);



// ------------------------------------------------------------------
// 3. OPERACIONES NUMÉRICAS Y USO DE Math
// ------------------------------------------------------------------

// Subtotal e IVA (impuesto)
// const subTotal = 200
// const iva = 0.16

// Calcular total con IVA incluido
// const total = subTotal + (subTotal * iva)

// Generar un número aleatorio entre 1 y 100
// console.log(Math.floor(Math.random() * 100) + 1)

// Mostrar el total
// console.log(total)

// Redondeos con Math
// console.log(Math.round(7.5))   // 8  → redondeo normal
// console.log(Math.floor(7.9))   // 7  → redondeo hacia abajo
// console.log(Math.ceil(7.1))    // 8  → redondeo hacia arriba



// ------------------------------------------------------------------
// 4. INCREMENTOS Y DECREMENTOS
// ------------------------------------------------------------------

// let numero = 10        // Declaración y asignación
// numero = 20            // Reasignación directa
// numero++               // Incremento en 1 (post-incremento)
// numero = 30            // Otra reasignación
// numero--               // Decremento en 1 (post-decremento)
// console.log(numero)    // Valor final = 29



// ------------------------------------------------------------------
// 5. BOOLEANOS (LÓGICA VERDADERO / FALSO)
// ------------------------------------------------------------------

// const estaAutenticado = true
// const tarjetaValida = false
// console.log(estaAutenticado)   // true
// console.log(tarjetaValida)     // false
