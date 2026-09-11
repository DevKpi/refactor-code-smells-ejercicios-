function x(a, b, c) {
    if (c === 1) {
        return a - a * b / 100;
    }
    return a;
}

// Responder:
// ¿Qué hace la función?
// La función `x` toma tres parámetros: `a`, `b` y `c`. Si el valor de `c` es igual a 1, la función calcula un descuento sobre el valor de `a` basado en el porcentaje `b`, y devuelve el resultado. Si `c` no es igual a 1, simplemente devuelve el valor de `a`.

// ¿Qué nombres son poco descriptivos?
// Los nombres de los parametros de la función son pocos descriptivos.

// ¿Qué podría significar el 1?
// El valor '1' podría representar un estado o condición para activar un cálculo de descuento.

// ¿Qué Code Smells encuentran?
// Nombres de parametros poco descriptivos, número mágico (1) sin contexto.

// Refactorizar manteniendo exactamente el mismo comportamiento. 
function calcularDescuento(precio, porcentajeDescuento, aplicarDescuento) {
    if (aplicarDescuento === 1) {
        return precio - precio * porcentajeDescuento / 100;
    }
    return precio;
}