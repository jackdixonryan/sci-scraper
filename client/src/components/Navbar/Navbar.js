import React from 'react';
import './Navbar.css'

class Navbar extends React.Component{

  render(){
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper white">
          <a href="/" className="brand-logo center red-text lighten-3"><i class="fas fa-globe-americas"></i>OLOGY</a>
        </div>
        <div className="nav-content">
          <ul className="tabs" style={{textAlign: 'center'}}>
            <li className="tab"><a href="/sciences/archaeology">Archaeology</a></li>
            <li className="tab"><a href="/sciences/paleontology">Paleontology</a></li>
            <li className="tab"><a href="/sciences/astronomy">Astronomy</a></li>
            <li className="tab"><a href="/sciences/cosmology">Cosmology</a></li>
            <li className="tab"><a href="/sciences/philosophy">Philosophy</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;