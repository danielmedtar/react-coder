// Para traerse la librería de react desde Node y tenerla en Scope. Hoy día puede ser opcional
import React from 'react';

//Tener ReactDOM en scope
import ReactDOM from 'react-dom';

// Tener por lo menos un componente
import App from "./App"

import "./styles.scss"

//Mostrar la aplicación en el DOM
ReactDOM.render(<App/>, document.getElementById('root'));