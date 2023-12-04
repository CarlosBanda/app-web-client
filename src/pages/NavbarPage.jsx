import React from 'react'
import image from "../images/logotipo-02.png";
// const image = require("../images/logotipo-02.png").default;
export const NavbarPage = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <a class="navbar-brand" href="#">
                <img src={image} width="100%" height="40vh" class="d-inline-block align-top" alt="" />
                
            </a>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
            </div>
        </nav>
  )
}
