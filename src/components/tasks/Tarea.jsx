import React,{useContext} from 'react'
import tareaContext from '../../context/tasks/tareasContext';

const Tarea = ({tarea}) => {

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const {eliminarTarea,  obtenerTareas, cambiarEstadoTarea, guardarTareaActual}=tareasContext;

    const {nombre, estado} = tarea



    //funcion que se ejecuta cuando el usuario preciona el boton eliminar tarea
    const tareaEliminar=(id)=>{
        eliminarTarea(id);
        obtenerTareas(tarea.proyectoId);  
     }

     //funcion que modifica el estado de las tareas
     const cambiarEstado = (tarea)=>{

        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
     }

     //agregar una tarea actual cuando el usuario dese editarla
     const seleccionarTarea = tarea =>{ 
        guardarTareaActual(tarea);
     }


    return ( 
        <li className="tarea sombra">
            <p>{nombre}</p>
            <div className="estado">
                {estado 
                ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={()=>cambiarEstado(tarea)}
                        >completo</button>
                    )

                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={()=>cambiarEstado(tarea)}
                        >incompleto</button>      
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={()=> seleccionarTarea(tarea)}
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={()=>tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;