import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation'
import Detalls from './components/Detalls'
import BuscarLaboration from './components/BuscarLaboration'
import BuscarCuestions from './components/BuscarCuestions'
import BuscarConexion from './components/BuscarConexion'
import BuscarExploration from './components/BuscarExploration'
import BuscarCapturations from './components/BuscarCapturations'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
          <Route path="/" exact component={Detalls} />
          <Route path="/laboratori" component={BuscarLaboration} />
          <Route path="/cuestionari" component={BuscarCuestions} />
          <Route path="/conectado" component={BuscarConexion} />
          <Route path="/exploro" component={BuscarExploration} />
          <Route path="/capturado" component={BuscarCapturations} />
      </div>

    </Router>
  );
}

export default App;
