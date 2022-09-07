import PropTypes from 'prop-types';

export const FirtsApp = ( {title, subTitle, name} ) => {
    return (
        //Estp es in fragment <></> es un wrapper o padre
        <>
            <p>{ title }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
            <p>Segundo nodeo</p>
        </>
    );
};

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired
}

//Default props
FirtsApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Fran'
}