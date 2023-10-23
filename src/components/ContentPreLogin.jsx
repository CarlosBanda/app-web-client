import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ContentPreLogin = () => {
  const navigate = useNavigate()

  const onLogin = () =>{
    navigate('/login-clients',{
      replace: true
    })
  }
  const onRegister = () =>{
    navigate('/register-clients',{
      replace: true
    })
  }
  return (
    <div className='content-options'>
        <div className="m-5 logo" style={{'flex':1}}>
        </div>
        <div className="mt-4" style={{'flex':1}}>
            <h2 className='p-white'>Hola, bienvenido</h2>
            <span className='p-white'>Estamos contentos de verte.</span>
        </div>
        <div className="" style={{'flex':1}}>
            <button className='btn btn-primary btn-lg btn-block' style={{'border-radius': '30px'}} onClick={onLogin}>Iniciar sesión</button>
            <p className='p-white mt-5'>¿Aún no tienes una cuenta? Rigistrate</p>
            <button className='btn btn-outline-primary btn-lg btn-block p-white' style={{'border-radius': '30px'}} onClick={onRegister}>Registrarse</button>
        </div>
    </div>
  )
}
