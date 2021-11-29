import React, {useContext} from 'react'
import proyectoContext from '../../context/project/proyectoContext'
import tareaContext from '../../context/tasks/tareasContext';

const Proyecto = ({proyecto}) => {
     //obtener el state del formulario
     const proyectosContext = useContext(proyectoContext);
     const { proyectoActual } = proyectosContext;

     //obtener la funcion del contex de las tareas
     const tareasContext = useContext(tareaContext)
     const { obtenerTareas }=tareasContext;

     //funcion para agregar el proyecto actual
     const selecionarProyecto=id=>{
        proyectoActual(id) //fija un proyecto actual
        // console.log(obtenerTareas)//fijar las tareas cuando se le den click
        obtenerTareas(id);
     }

    

     return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={()=> selecionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
     );
}
 
export default Proyecto;