import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-asyn-await', () => {
    test('getImagen debe de retornar un URL de la imagen', async () => {
        const url = await getImagen();
        expect( url).toBe('No se encontro la imagen');
    });
    
})