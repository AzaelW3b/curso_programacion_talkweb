// Clase 2: Condiciones, funciones y lógica de proposiciones
// Autor: Azael Garcia Jaimes - Líder técnico | Talkweb  

// ────────────────────────────────────────────────────────────
// 1. IF ELSE BÁSICO
// ────────────────────────────────────────────────────────────

// Variable booleana que indica si el usuario ha iniciado sesión.
// “false” → el usuario **NO** está autenticado.
const usuarioAutenticado = false

// Estructura condicional que evalúa la variable anterior.
// Si la condición es verdadera se ejecuta el primer bloque,
// de lo contrario se ejecuta el bloque dentro de “else”.
if (usuarioAutenticado) {
  console.log('El usuario está autenticado')
} else {
  console.log('El usuario NO está autenticado')
}

// ────────────────────────────────────────────────────────────
// 2. OPERADORES DE COMPARACIÓN (== vs ===)
// ────────────────────────────────────────────────────────────

// “==”  → comparación con no estricta (convierte tipos implícitamente)
// “===” → comparación estricta (NO hace conversión de tipos)
// Buenas prácticas: usar siempre “===” 

const numero1 = 5          // number
const numero2 = '5'        // string
console.log(numero1 === numero2) // false  → tipos distintos

// ────────────────────────────────────────────────────────────
// 3. IF ELSE ENCABEZADO 
// ────────────────────────────────────────────────────────────

// Tres banderas que representan el estado de un pedido
const pagado     = false
const pendiente  = true
const cancelado  = true

// El primer condicional verdadero detiene la cadena
if (pagado) {
  console.log('El usuario ya pagó')
} else if (pendiente) {
  console.log('El usuario no ha pagado')
} else if (cancelado) {
  console.log('El usuario canceló su pedido')
} else {
  console.log('El usuario no ha hecho movimientos')
}

// ────────────────────────────────────────────────────────────
// 4. SWITCH: ALTERNATIVA A MÚLTIPLES IFs
// ────────────────────────────────────────────────────────────

// Evitar los “magic strings” ya que deben texto escritos de manera literal (posterior usaremos ENMUS) 
const estado = 'pagado'

// Cambia el valor para probar cada caso

switch (estado) {
  case 'pagado':
    console.log('El usuario ya liquidó la deuda')
    break

  case 'pendiente':
    console.log('El usuario tiene un adeudo')
    break

  case 'cancelado':
    console.log('El usuario ya canceló su pedido')
    break

  default:
    console.log('Estado desconocido')
}

// ────────────────────────────────────────────────────────────
// 5. OPERADORES LÓGICOS (&&, ||, !)
// ────────────────────────────────────────────────────────────

// Proposiciones simples
const edad = 18
const tienesIdentificacion = false

// AND (&&) → ambas condiciones deben ser verdaderas
if (edad >= 18 && tienesIdentificacion) {
  console.log('Sí, puedes pasar')
} else {
  console.log('No, no puedes pasar')
}

// OR (||) → al menos una condición debe ser verdadera
if (edad >= 18 || tienesIdentificacion) {
  console.log('Sí, puedes pasar')
} else {
  console.log('No, no puedes pasar')
}

// NOT (!) → niega el valor de la proposición
const pagoVencido = true

if (!pagoVencido) {
  console.log('Puedes pasar al sistema')
} else {
  console.log('No puedes pasar, cerrando sesión …')
}

// ────────────────────────────────────────────────────────────
// 6. FUNCIONES
// ────────────────────────────────────────────────────────────

// 6.1  Función sin parámetros ni variables externas
//      Devuelve siempre la misma operación (2 + 2)
function sumar () {
  return 2 + 2
}
console.log(sumar()) // 4

// 6.2  Función con parámetros
//      Retorna la suma de los argumentos recibidos
function sumarParametros (numero1, numero2) {
  return numero1 + numero2
}
const resultado = sumarParametros(5, 5)
console.log(resultado) // 10

// 6.3  Función con parámetro opcional (IVA por defecto = 16 %)
//      Si el segundo argumento no se pasa, toma el valor 0.16
function precioConIVA (subtotal, iva = 0.16) {
  return subtotal + subtotal * iva
}
const total = precioConIVA(100) // Usa el IVA por defecto
console.log(total)              // 116
