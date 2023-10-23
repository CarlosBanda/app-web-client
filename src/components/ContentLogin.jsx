import React from 'react'

export const ContentLogin = () => {
  return (
    <div className='content-options'>
        <div className="m-5 logo" style={{'flex':1}}>
        </div>
        <div className="content-options" style={{'flex':1}}>
            <h2 className='p-white'>Hola, bienvenido</h2>
            <h2 className='p-white'>Iniciar sesión</h2>
            <span className='p-white'>Estamos contentos de verte.</span>
        </div>
        <div className="mt-5 inputs-login" style={{'flex':1}}>
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
        <div className="mt-5" style={{'flex':1}}>
            <button className='btn btn-primary btn-lg btn-block' style={{'border-radius': '30px'}}>Iniciar sesión</button>
            <p className='p-white mt-5'>¿Aún no tienes una cuenta? Rigistrate</p>
        </div>
    </div>
  )
}
