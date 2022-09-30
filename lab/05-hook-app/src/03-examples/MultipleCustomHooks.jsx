import { useFetch, useCounter } from '../hooks';
import { LoadingQuotes, Quote } from './';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { author, quote } = !!data && data[0];
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                ? <LoadingQuotes />
                : <Quote author={ author } quote={ quote} />
            }

            <button 
                onClick={ () => increment( 1 ) } 
                className='btn btn-primary'
                disabled={ isLoading }
            >
                Nest Quote
            </button>
            
        </>
    )
}
