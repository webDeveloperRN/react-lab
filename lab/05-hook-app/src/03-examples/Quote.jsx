import { useLayoutEffect, useRef, useState } from 'react';


export const Quote = ({ quote, author}) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [quote])

    return (
        <>
            <blockquote 
                className='blockquote text-end'
                style={{ display: 'flex' }}
            >
                <p className='mb-1'>{ quote }</p>
                <footer ref={ pRef } className='blockquote-footer'>{ author }</footer>
            </blockquote>
            <code>{ JSON.stringify( boxSize ) }</code>
        </>
    )
}


