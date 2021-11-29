import React, {useReducer} from "react";
import TareaContex from './tareasContext';
import { v4 as uuidv4 } from 'uuid';
import reducer from "./tareasReduce";
import {
     TAREAS_PROYECTO,
     AGREGAR_TAREA,
     VALIDAR_TAREA,
     ELIMINAR_TAREA,
     ESTADO_TAREAS,
     TAREA_ACTUAL,
     ACTUALIZAR_TAREA,
     LIMPIAR_TAREA
    } from "../../types/indes";

const TareaState=(props)=>{
    const initialState={ 
        tareas: [
            {id:1, nombre:'Elegir la plataforma', estado: true, proyectoId: 1},
            {id:2, nombre:'Elegir colores', estado: false, proyectoId: 2},
            {id:3, nombre:'Elegir la plataforma de pagos', estado: true, proyectoId: 3},
            {id:4, nombre:'Elegir hosting', estado: false, proyectoId: 4},
            {id:5, nombre:'Elegir la plataforma', estado: false, proyectoId: 1},
            {id:6, nombre:'Elegir colores', estado: false, proyectoId: 2},
            {id:7, nombre:'Elegir la plataforma de pagos', estado: true, proyectoId: 3},
            {id:8, nombre:'Elegir hosting', estado: false, proyectoId: 4},
            {id:9, nombre:'Elegir la plataforma', estado: true, proyectoId: 1},
            {id:10, nombre:'Elegir colores', estado: false, proyectoId: 2},
            {id:11, nombre:'Elegir la plataforma de pagos', estado: true, proyectoId: 3},
            {id:12, nombre:'Elegir hosting', estado: false, proyectoId: 4},
            {id:13, nombre:'Elegir la plataforma de pagos', estado: true, proyectoId: 1}
        ],
        tareasProyectos: null,
        errorTarea: false,
        tareaSeleccionada: null
    }

    //creamos el dispatch y state
    const [state, dispatch] = useReducer(reducer, initialState);

    //CREAR LAS FUNCIONES

    //obtener las tareas del proyecto
    const obtenerTareas=(proyectoId)=>{
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //agregar una tarea al proyecto seleccionado
    const agregarTareas=(tarea)=>{
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload:tarea
        })
    }

    //Valida y muestra un error en caso de que sea necesario
    const validatTarea =()=>{
        dispatch({
            type:VALIDAR_TAREA
        })
    }
    
    //Eliminar una tarea por su ID
    const eliminarTarea=(id)=>{
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //Cambia el estado de cada tarea
    const cambiarEstadoTarea=(tarea)=>{
        dispatch({
            type: ESTADO_TAREAS,
            payload: tarea
        })
    }

    //Extrae la tarea para edicion
    const guardarTareaActual=tarea=>{
        dispatch({
            type:TAREA_ACTUAL,
            payload: tarea
        })
    }

    //edita  o modifica una tarea
    const actualizarTarea = tarea=>{
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //limpia todo el formulrio de tarea
    const limpiarTarea =()=>{
        dispatch({
            type:LIMPIAR_TAREA
        })
    }

    return(
        <TareaContex.Provider
            value={{
                tareas: state.tareas,
                tareasProyectos: state.tareasProyectos,
                errorTarea: state.errorTarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTareas,
                validatTarea, 
                eliminarTarea, 
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContex.Provider>
    )
}

export default TareaState;