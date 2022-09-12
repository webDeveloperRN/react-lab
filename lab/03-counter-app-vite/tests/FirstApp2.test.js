/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
    
    const title = 'Hola, Soy Goku';
    const subTitle = 'No hay subtítulo';
    
    test('debe de hacer match con el snapshot', () => {
        //El metodo reder contiene un propiedad llamada CONTAINER
        //la cual es como un nodo de html al usar lo se crea un snapshot
        //el cual se almcena y sirve para hacer comparaciones
        const { container } = render( <FirstApp title={ title } /> );
        //Se compara el snap guadado con toMatchSnapshot
        expect( container ).toMatchSnapshot();
    });
    
    test('debe mostrar el mensaje hola soy goku', () => {    
        render( <FirstApp title={ title } /> );
        //screen es una copia del objeto que estamos renderizando
        //despues verificamosque el texto este en  el renderizado
        expect( screen.getByText(title) ).toBeTruthy();
        //Negacion .not
        //expect( screen.getByText(title) ).not.toBeTruthy();
    });

    test('debe de mostrar el titulo en un h1 ', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level:1}).innerHTML ).toContain( title );
    })

    test('Debe de mostrar el susbtitulo enviado por props ', () => {
        render( 
            <FirstApp 
                title={ title } 
                subTitle={ subTitle }
            /> 
        );
        expect( screen.getAllByText(subTitle).length).toBe(2);
    });
});