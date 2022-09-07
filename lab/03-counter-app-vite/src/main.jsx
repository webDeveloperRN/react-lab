import React from "react";
//Heraminetaz de rdenrizado
import ReactDOM from "react-dom/client";
//nuestro funcitional component
//import { HelloWorldApp } from './HelloWorldApp';
import './styles.css'

//import  {FirtsApp} from './FirtsApp';
import  {CounterApp} from './CounterApp';
//Renderizado del compoenent
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 0 }  />
    </React.StrictMode>
);