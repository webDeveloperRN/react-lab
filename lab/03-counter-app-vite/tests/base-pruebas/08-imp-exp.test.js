import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';


describe('Pruebas eb 08-imp-exp', () => {
    test('getHeroeById debe de retornar un hérue por ID', () => {
        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe de retornar un undefine si no existe el  ID', () => {
        const id = 100;
        const hero = getHeroeById( id );
        //toBeFalsy evalua si es null, unde o false
        expect( hero ).toBeFalsy();
    });

    test('getHeroesByOwner debe de regrsar los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        //forma 1
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
        //forma 2 FORMA IDEAL
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    });

    test('getHeroesByOwner debe de regrsar los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        //forma 2 FORMA IDEAL
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
        console.log(heroes)
    });

});