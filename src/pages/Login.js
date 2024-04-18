import React from 'react';
import CustomInput from "../components/CustomInput";
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        
        <div className="py-5" style={{background:"#6C63FF", minHeight:"100vh"}}>

        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
            <h3 className="text-center">Login</h3>
            <p className="text-center">Ingresa tus datos registrados, para hacer uso de nuestro servicio.</p>
        <form action="">
           <CustomInput type ="text" label="EmailAddress"id="email"/>
            <CustomInput type= "password" label="password" id="pass"/>
            <div className='mb-3 text-end'>

                <Link to="forgot-password" className="">Recuperar contraseña</Link>
            </div>
            <Link to= "/admin"
            className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5 color-button"
            
            type="submit">
                Login
            </Link>
            </form>
        </div>
        </div>
    );
}

export default Login;

