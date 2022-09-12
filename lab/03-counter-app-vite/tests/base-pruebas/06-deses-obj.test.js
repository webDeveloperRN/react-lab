import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Prueba en 06-desses-obj', () => {
    test("usContext debe de retornar un Objeto", () => {
        const clave = '007';
        const edad = 31;
        const testUsContext = usContext(clave, edad);
        
        expect(testUsContext).toStrictEqual({
            nombreClave: '007',
            anios: 31,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});