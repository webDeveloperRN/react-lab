import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
    return (
        //Estp es in fragment <></> es un wrapper o padre
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
        </>
    );
};
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }
  
  FirstApp.defaultProps = {
    name: 'Fernando Herrera',
    subTitle: 'No hay subtítulo',
    // title: 'No hay título',
  }