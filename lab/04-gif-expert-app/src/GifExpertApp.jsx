import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {
    const [categories, setcategories] = useState( ['One Punch', 'Dragon ball']);
    const onAddCategory = () => {
        //Forma  1
        //setcategories(categories => [...categories, 'Valorant']);
        //Forma2
        //setcategories( categories => [...categories, 'Valorant'] );
    }
    return(
        <>
        { /*titulo */ }
        <h1>GifExpertApp</h1>
        { /* input */ }
        <AddCategory setcategories={ setcategories } />
        { /* Listado de gifs */}
        <ol>
            {
            categories.map( category => {
                return <li key={ category }>{ category}</li>
            })
            }
        </ol>
        </>
    )
}
//hiD9ZAAgrs7PWYA3ZGNBva1oT8Kfch3l