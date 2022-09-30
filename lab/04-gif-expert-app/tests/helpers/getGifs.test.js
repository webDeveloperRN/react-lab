import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
    
    test('debe de retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('One Punch');
        console.log(gifs);
        //que sean mas grande que cero toBeGreaterThan
        expect( gifs.length ).toBeGreaterThan( 0 );
        //la posision cero gifs[0]
        expect( gifs[0] ).toEqual({
            //que el id, title, url sean un string
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
        
    });

});