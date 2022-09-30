import { useRef } from 'react';

export const FocusScreen = () => {

  const inputref = useRef();
  

  const onClick = () => {
    //console.log(inputref);
    inputref.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input 
        ref={ inputref }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control" 
      />

      <button  onClick={ onClick } className="btn btn-primary mt-2">
        set focus
      </button>
    </>  
  )
}
