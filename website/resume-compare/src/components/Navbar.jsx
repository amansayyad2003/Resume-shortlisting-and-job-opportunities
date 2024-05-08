import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Launchpad</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> 
      </ul>
     
      <Link style={{marginRight:'133px'}} className="nav-link active" aria-current="page" to="/user">User Recommendation</Link>
      <Link className="nav-link active" aria-current="page" to="/Hr">HR comparison</Link>
   
    </div>
  </div>
</nav>
    </div>
  )
}
