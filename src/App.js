import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/project/Proyectos';
import ProyectoState from './context/project/proyectoState'
import TareaState from './context/tasks/tareaState';

function App() {
  return (
    <ProyectoState>
      <TareaState> 
      <Router>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="nueva-cuenta" element={<NuevaCuenta/>} />
              <Route path="proyectos" element={<Proyectos/>} />
          </Routes>
      </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
