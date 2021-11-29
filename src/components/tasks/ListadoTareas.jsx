import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/project/proyectoContext';
import tareaContext from '../../context/tasks/tareasContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import Tarea from './Tarea';

const ListadoTareas = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const { tareasProyectos } = tareasContext;

    //sino hay proyectos seleccionados 
    if (!proyecto) return <h2>Selecciona un proyecto</h2>

    //aplicar array destructuring, para extraer el proyecto actual
    const [proyectoActual] = proyecto;


    //elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        <Fragment>
            <h2>Proyectos: {proyectoActual.nombre} </h2>
            <ul className="listado-tareas">
                {tareasProyectos.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : <TransitionGroup>
                        {tareasProyectos.map(tarea => (
                            <CSSTransition
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea
                                tarea={tarea}
                            />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;