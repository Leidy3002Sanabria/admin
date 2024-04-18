import React from 'react';
import CustomInput from "../components/CustomInput";
const Forgotpassword = () => {
    return (
        
        <div className="py-5" style={{background:"#6C63FF", minHeight:"100vh"}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            
        <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
            <h3 className="text-center">Recuperar Contraseña</h3>
            <p className="text-center">Por favor ingrese su correo electronico para recibir su contraseña.</p>
        <form action="">
           <CustomInput type ="text" label ="Email Address" id="email"/>
            <button
            className="border-0 px-3 py-2 text- white fw-bold w-100"
            style={{background:"6C63FF"}}
            type="submit"
            >Enviar</button>
            </form>
        </div>
        </div>
    );
}

export default Forgotpassword;
