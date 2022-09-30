import { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y : 0});

    useEffect(() => {
        //console.log('Message Mounted');
        const OnMouseMove = ( {x, y }) => {
            setCoords( { x, y });
        }
        window.addEventListener( 'mousemove', OnMouseMove );
      return () => {
        //console.log('Message Unmounted');
        window.removeEventListener( 'mousemove', onmousemove);
      }
    }, [])
    
    return (
        <>
            <h3>Usuario ya existe</h3>
            { JSON.stringify( coords ) }
        </>
    )
}

export default Message
