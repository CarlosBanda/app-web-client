import React from 'react'
import { ContentLogin, ImageBackground } from '../components'

export const LoginPage = () => {
  return (
    <>
      <div className="contenedor">
        <div className='contenedor-pre-login'>
          <ContentLogin/>
        </div>
        <div className='bg-pre-login'>
          <ImageBackground/>
        </div>
      </div>
    </>
  )
}
