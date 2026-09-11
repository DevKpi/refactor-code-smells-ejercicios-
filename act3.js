function f(a, b) {
    if (b == 0) {
        return a;
    }

    if (b > 100) {
        return a;
    }

    if (b < 0) {
        return a;
    }

    return a - (a * b / 100);
}

module.exports = f;

// Parte A
// Antes de modificarla, crear tests para:
// descuento normal;
// descuento cero;
// descuento 100%;
// descuento negativo;
// descuento superior a 100%.

// Parte B
// Ejecutar: npm test
// Todos deberían representar el comportamiento actual esperado.

// Parte C
// Refactorizar.

// Parte D
// Ejecutar nuevamente exactamente los mismos tests.
// El objetivo no es solamente mejorar la función.
// El objetivo es experimentar el ciclo: Test → Refactor → Test.

// Parte C - Refactor
function calcularDescuento(precio, porcentajeDescuento) {
    if (porcentajeDescuento <= 0 || porcentajeDescuento > 100) {
        return precio;
    }
    return precio - (precio * porcentajeDescuento / 100);
}

module.exports = calcularDescuento;