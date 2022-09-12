import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';
describe('Pruebas en 07-deses-arr', () => {
    test('Debe de retornar un string y un número', () => {
        //retornaArreglo me retorna un array con 2 valores
        // y desestructuro
        const [ letters, numers ] = retornaArreglo();

        //se validadan los valores retornados de 2 formas
        //Forma 1
        expect( typeof letters ).toBe('string');
        expect( typeof numers ).toBe('number');
        //Forma 2
        expect( letters ).toEqual( expect.any(String) );
    });
});