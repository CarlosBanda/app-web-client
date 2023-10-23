import React from 'react'
import { ContentPreLogin, ImageBackground } from "../components";

export const HomePage = () => {
  return (
      <div className="contenedor">
        <div className='contenedor-pre-login'>
          <ContentPreLogin/>
        </div>
        <div className='bg-pre-login'>
          <ImageBackground/>
        </div>
      </div>
  )
}
