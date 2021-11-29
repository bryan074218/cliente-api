import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

  //state para iniciar sesion
  const [usuario, SetUsuario] = useState({
     nombre:'', 
     email:'',
     password:'',
     confirmar:''
  });

  //extraemos de usuario su password y su emial
  const {nombre, email, password, confirmar} = usuario;

  const onChange=(e)=>{

    SetUsuario({
      ...usuario,
      [e.target.name]:e.target.value
    });
  }

  //cuando el usuario quiere iniciar sesion
  const onSubmit =(e)=>{
    e.preventDefault();

    //validamos que no hayan campos vacios

    //passaword minimo 6 caracteres

    //password iguales

    //pasarlos al action


  }

  
    return (
        <div className="form-usuario">
          <div className="contenedor-form sombra-dark">
            <h1>Obtener una cuenta</h1>
            <form onSubmit={onSubmit}>
              <div className="campo-form">
                <label htmlFor="nombre">Nombre</label>
                <input
                   type="text"
                   id="nombre"
                   name="nombre"
                   placeholder="Tu Nombre"
                   onChange={onChange}
                   value={nombre}
                 />
              </div>
              <div className="campo-form">
              <label htmlFor="email">E-mail</label>
              <input
                   type="email"
                   id="email"
                   name="email"
                   placeholder="Tu email"
                   onChange={onChange}
                   value={email}
                 />
              </div>
              <div className="campo-form">
                <label htmlFor="password">Tu Password</label>
                <input
                   type="password"
                   id="password"
                   name="password"
                   placeholder="Tu password"
                   onChange={onChange}
                   value={password}
                 />
              </div>
              <div className="campo-form">
                <label htmlFor="confirmar">Confirmar Password</label>
                <input
                   type="password"
                   id="confirmar"
                   name="confirmar"
                   placeholder="Repite tu password"
                   onChange={onChange}
                   value={confirmar}
                 />
              </div>
              <div className="campo-form">
                <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
              </div>
            </form>
            <Link to={"/"}className="enlace-cuenta">
                Iniciar Sesion
            </Link>
          </div>
        </div>
      );
}
 
export default NuevaCuenta;