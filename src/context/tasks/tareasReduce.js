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


const reducer=(state, action) =>{
    switch(action.type){
        case TAREAS_PROYECTO:
            return{
                ...state,
                tareasProyectos: state.tareas.filter(tarea=>tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                tareas: [action.payload, ...state.tareas],
                errorTarea: false
            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea=> tarea.id !== action.payload)
            }
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREAS:
            return{
                ...state,
                tareas: state.tareas.map(tarea=>tarea.id === action.payload.id ? action.payload : tarea)
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaSeleccionada: action.payload
            }
        case LIMPIAR_TAREA:
            return{
                ...state,
                tareaSeleccionada: null
            }

            default:
            return state;
    }
}
export default reducer;