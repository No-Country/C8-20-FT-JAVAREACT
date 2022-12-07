import { useState } from 'react';
import '../../css/login.css';

function Login({setLogin}){

    const sendForm = (e) =>{
        e.preventDefault()
        console.log('Logeado')
    }

    return(
        <>
             <div className="containerModal" >
                    <form className="modalContent">
                        <p className='close' onClick={()=>{setLogin(false)}} >X</p>
                        <h3 className="modalTitle" >Inicio de sesión</h3>
                        <div className="modalEmailContainer" >
                            <p>Email:</p>
                            <input type='email' placeholder='Email' />
                        </div>
                        <div className="modalPasswordContainer" >
                            <p>Contraseña:</p>
                            <input type='password' placeholder='Contraseña' />
                        </div>
                        <button className='LoginButton' onSubmit={()=>{sendForm()}} >Iniciar sesión</button>
                    </form>
            </div>
        </>
    )
}

export default Login;