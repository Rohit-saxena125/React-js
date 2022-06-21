import React from 'react'
import logo from '../constants/logo.png';
import data from '../constants/constants';
export default function Navbar() {
  return (
<section class="navbar-dark bg-primary header">
       <div class="container">
          <div class="row">
           <div class="col-sm-12"> 
            <nav class="navbar navbar-expand-lg ">
              <a class="navbar-brand text-white" href="#"><img src={logo} alt="logo" /></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item ">
                    <a class="nav-link " href="#"style={{ color: "Black" }}>{data.navbar.home}<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"style={{ color: "Black" }}>{data.navbar.about}<span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item dropdown">
                  <a class="nav-link" href="#"style={{ color: "Black" }}>{data.navbar.Contact}<span class="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
             </nav>
            </div>
          </div>
        </div>
    </section> 
  );
}