import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ContentLogin = () => {
    const navigate = useNavigate()

  const onLogin = () =>{
    navigate('/panel',{
      replace: true
    })
  }
  return (
    <div className='content-options'>
        <div className="m-3 logo" style={{'flex':1}}>
        </div>
        <div className="content-options" style={{'flex':1}}>
            {/* <h2 className='p-white'>Hola, bienvenido</h2> */}
            <h2 className='p-white'>Iniciar sesión</h2>
            <span className='p-white'>Estamos contentos de verte.</span>
        </div>
        <div className="mb-2 inputs-login" style={{'flex':1}}>
            <form >
                <div class="form-group">
                    <label className='p-white' for="exampleInputEmail1">Número de télefono</label>
                    <input type="text"style={{'border-radius': '30px'}} class="form-control form-control-lg" id="exampleInputPassword1" placeholder='9610000000'/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" className='p-white'>Password</label>
                    <input type="password" style={{'border-radius': '30px'}} class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                </div>
            </form>
        </div>
        <div className="" style={{'flex':1}}>
            <button className='btn btn-primary btn-lg btn-block' style={{'border-radius': '30px'}} onClick={onLogin}>Iniciar sesión</button>
            <p className='p-white mt-2'>¿Aún no tienes una cuenta? Rigistrate</p>
        </div>
    </div>
  )
}
