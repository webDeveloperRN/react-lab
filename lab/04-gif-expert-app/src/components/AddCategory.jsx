import { useState } from 'react';
import PropTypes  from 'prop-types';
//onNewCategory es la prop que viene de GifExpertApp
export const AddCategory = ( { onNewCategory }) => {
    //inputValue Valor inicial de nuestro imput (''vacio')

    const [inputValue, setInputValue] = useState('');
    //target viene de event.target.value solo que los desestructuramos
    const onInputChange = ( { target } ) => {
        //La funcion setInputValue recibe y alamcena en memoria 
        //el value del input
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //Si esta vacio hace un return
        if( inputValue.trim().length <= 1 ) return;
        //hace un callback de categories, lo clona y le agrega el valor del input
        /*setcategories(categories => [...categories, inputValue]);*/
        //FINAL llama a onNewCategory yle paso el valor del inputValue
        onNewCategory(inputValue.trim())
        //limpia el imput
        setInputValue('');
    }

    return(
        /*<form onSubmit={ (event) => onSubmit(event) }>*/
          <form onSubmit={ onSubmit } aria-label="form" >
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                //Se envia un chage event (se toma y envia 
                //lo que se escribe dentro del input) 
                /*onChange={ ( event) => onInputChange(event) }*/
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

