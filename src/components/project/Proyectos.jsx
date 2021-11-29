import React from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FomrTareas from '../tasks/FormTareas';
import ListadoTareas from '../tasks/ListadoTareas';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>

            <div className="seccion-principal">
                <Barra/>

                <main>
                <FomrTareas/>

                    <div className="contenedor-tareas">    
                        <ListadoTareas/>                    
                    </div>
                </main>
            </div>
        </div> 
     );
}
 
export default Proyectos;