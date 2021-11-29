import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from '../../context/project/proyectoContext'
import tareaContext from '../../context/tasks/tareasContext';


const FomrTareas = () => {

    //extraer  si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const { tareaSeleccionada, errorTarea, agregarTareas, validatTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext;

    //effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if (tareaSeleccionada !== null) {
            SetTareas(tareaSeleccionada);
        } else {
            SetTareas({
                nombre: ''
            })
        }
    }, [tareaSeleccionada]);

    //state del formulario
    const [tarea, SetTareas] = useState({
        nombre: ''
    })
    const { nombre } = tarea;

    //sino hay proyectos seleccionados 
    if (!proyecto) return null

    //leer los valores del formulario
    const handlechange = (e) => {
        SetTareas({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    //aplicar array destructuring, para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const onSubmit = (e) => {
        e.preventDefault();

        //validar
        if (nombre.trim() === '') {
            validatTarea();
            return;
        }

        //si es edicion o si es una nueva tarea
        if (tareaSeleccionada === null) {
            //agregar la nueva tarea al state de tarea
            tarea.proyectoId = proyectoActual.id
            tarea.estado = false
            agregarTareas(tarea);
        }else{
            //actualiza la tarea existente
            actualizarTarea(tarea);

            //elimina tareaseleccionada del state
            limpiarTarea()
        }

        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id)

        //reiniciar el form
        SetTareas({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form onSubmit={onSubmit}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        name="nombre"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        value={nombre}
                        onChange={handlechange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errorTarea
                ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>
                : null
            }
        </div>
    );
}

export default FomrTareas;
