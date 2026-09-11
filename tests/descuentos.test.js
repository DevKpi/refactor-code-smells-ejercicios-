const f = require('../act3');

describe(' test de la funcion f', () => {

    test('descuento normal', () => {
        expect(f(100, 20)).toBe(80);
    });

    test('descuento cero', () => {
        expect(f(100, 0)).toBe(100);
    });

    test('descuento 100%', () => {
        expect(f(100, 100)).toBe(0);
    });

    test('descuento negativo', () => {
        expect(f(100, -10)).toBe(100);
    });

    test('descuento superior a 100%', () => {
        expect(f(100, 150)).toBe(100);
    });

});