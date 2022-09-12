import { useState } from 'react';
export const AddCategory = ( { setcategories }) => {

    const [inputValue, setInputValue] = useState('');
    //target viene de event.target.value solo que los desestructuramos
    const onInputChange = ( { target } ) => {
        //La funcion setInputValue recibe elvalue del input
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //valida que no este vacioy que no toma encuenta los espacios enblanco
        if( inputValue.trim().length <= 1 ) return;
        //hace un callback de categories, lo clona y le agrega el valor del input
        setcategories(categories => [...categories, inputValue]);
        //limpia el imput
        setInputValue('');
    }

    return(
        <form onSubmit={ /*(event) => onSubmit(event)*/ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ /* ( event) => onInputChange(event) */ onInputChange }
            />
        </form>
    )
}