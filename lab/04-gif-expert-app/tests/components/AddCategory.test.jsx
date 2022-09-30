import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    
    test('debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} } /> );
        //screen.debug();
        //buscamos el input del form
        const input = screen.getByRole('textbox');
        //debemos importar el fireEvent del test libary 
        //disparamos el evento del input con un valor estatico
        //target viene de event.target.value del compoenete a probar
        fireEvent.input( input, { target: { value: 'Saitama' } });
        expect( input.value ).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue    = 'Saitama';
        //jest mok es una simulacion de una funcion. 
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        // PARA OBTENER EL FORM SE AGRGEGO EN EL COMPORNENTE DEL FORM arial-label
        //<form onSubmit={ onSubmit } aria-label="form" >
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');
        //JEST FUNCTIONS
        //evaluamos que la funcion ficticia alla sido llamada
        expect( onNewCategory ).toHaveBeenCalled();
        //velauamos que la funcion solo se llame una ves
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //evaluamos que la funcion haya sido llamda con el valor  de la caja de texto
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });
    
    test('no debe de llamar el onNewCategory si el input está vació', () => {
        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
    

});