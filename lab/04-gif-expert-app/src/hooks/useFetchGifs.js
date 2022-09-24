import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs  = ( category) => {    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoding] = useState( true );
    //creamos una funcion asincrona
    const getImages = async() => {
        //almacenamos la respuesta de la peticion
        const newImages = await getGifs( category );
        //colocamos la respuestaanterior en state
        setImages( newImages );
        setIsLoding( false );
    }
    //useEffect solo se jecuta una vez cada que se ejecuta el componente
    useEffect( () => {
        getImages();
    }, []);

    return{
        images,
        isLoading
    }
}