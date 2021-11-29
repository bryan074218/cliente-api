import React, { Fragment, useContext, useState } from "react";
import proyectoContext from '../../context/project/proyectoContext'

const NuevoProyectos = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    //state para el proyectos
    const [proyectos, setProyectos] = useState({
        nombre:''
    });

    //extramoe el nombre del proyecto
    const {nombre} = proyectos;

    //lee el contenido de los inputs
    const onchangeProyectos = (e)=>{
        setProyectos({
            ...proyectos,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario envia el proyecto
    const onSubmitProyectos = (e)=>{
        e.preventDefault();

        //validamos el proyecto
        if(nombre===''){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyectos);

        //reiniciar el formulario
        setProyectos({
            nombre:''
        })
    }

    //mostramos el formulario
    const onClickFormulario = ()=>{
        mostrarFormulario();
    }

    return (
        <Fragment>
            <button onClick={onClickFormulario} type="button" className="btn btn-block btn-primario">
                Nuevo Proyecto
            </button>

            {formulario ?
                (
                    <form onSubmit={onSubmitProyectos} className="formulario-nuevo-proyecto">
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onchangeProyectos}
                        />
        
                        <input type="submit" className="btn btn-primario btn-block" value="Agregar Proyecto" />
                    </form>
                ) : null}

            {errorFormulario ? <p className="mensaje error" >El nombre del proyecto es obligatorio</p> : null}

           
        </Fragment>
    );
};

export default NuevoProyectos;
