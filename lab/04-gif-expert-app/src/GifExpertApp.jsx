import { useState } from 'react';
import { AddCategory, GifGrid  } from './components';

export const GifExpertApp = ( { onNewCategory }) => {
    //hook personalizado categories
    const [categories, setcategories] = useState( []);
    const onAddCategory = (newCategory) => {
        if( categories.includes( newCategory ) ) return;
        //Forma  1
        //Usamos el operador spret ... para hacer una copia del arreglo
        // [..Array, addNewItemInArray] 
        setcategories([newCategory, ...categories ]);
        //Forma2
        //usando speret y un call back llamdo cat o como quieras llamar lo
        /*setcategories( cat => [...cat, 'Valorant'] );*/
    }
    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                /*setcategories={ setcategories } */
                //Mejorando de manera semantica
                /*onNewCategory={ (value) => onAddCategory(value) }*/
                //simplificando codigo
                onNewCategory={ onAddCategory }
            />            
            {
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
        </>
    )
}
//hiD9ZAAgrs7PWYA3ZGNBva1oT8Kfch3l