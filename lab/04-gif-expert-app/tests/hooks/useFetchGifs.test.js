import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


describe('Pruebas en el kook useFetchGifs', () => {
    
    test('debe de regresar el estado inicial', () => {
        //renderHook contiene result, unmount, rereder
        //desestructuramos y obtenemos result de la arrow function
        //a la que se le manda su category
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;
        // esperamos que el estado inicial sea cero imagenes
        expect( images.length ).toBe(0);
        //esparamos que el estado inicial de loading sea verdadero
        expect( isLoading ).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
              
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});