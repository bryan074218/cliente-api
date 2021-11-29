import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import reducer from './proyectoReduce';
import proyectoContext from './proyectoContext';
import { 
    AGREGAR_PROYECTOS,
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
    } from '../../types/indes';



const ProyectoState = props =>{
    const proyectos = [
        {id:1, nombre: 'tienda virtual'},
        {id:2, nombre: 'IntraNet'},
        {id:3, nombre: 'Diseno web'},
        {id:4, nombre: 'TASKSMErn'}
    ]
    const initialState={
        proyectos : [],
        formulario: false,
        errorFormulario: false,
        proyecto: null
    }

    //hacemos un dispach para ejecutar las funciones
    const[state, dispatch] = useReducer(reducer, initialState);

    //para poder ejecutar los crud
    const mostrarFormulario = ()=>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos =()=>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos 
        })
    }

    //agregar un nuevo proyecto
    const agregarProyecto = (proyecto)=>{
        proyecto.id = uuidv4();

        //insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })
    }

    //validar formulario por errores
    const mostrarError=()=>{
        dispatch({
           type: VALIDAR_FORMULARIO
        })
    }

    //selecciona el proyecto que el usuario dio click
    const proyectoActual=(proyectoId)=>{
        dispatch({
            type:PROYECTO_ACTUAL,
            payload:proyectoId
        });
    }

    //eliminar un proyecto 
    const eliminarProyecto=(proyectoId)=>{
        dispatch({
            type:ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }



    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                proyecto: state.proyecto,
                errorFormulario: state.errorFormulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;