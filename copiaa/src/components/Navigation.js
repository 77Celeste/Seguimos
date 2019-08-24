import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <i className="material-icons">REPORTES</i>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="#" className="nav-link">inicio</Link>
            </li>
            <li className="nav-item active">
              <Link to="/" className="nav-link">Detalles</Link>
            </li>
            <li className="nav-item">
              <Link to="/laboratori" className="nav-link">Laboratorios</Link>
            </li>
            <li className="nav-item">
              <Link to="/cuestionari" className="nav-link">Cuestionarios</Link>
            </li>
            <li className="nav-item">
              <Link to="/conectado" className="nav-link">Conectados</Link>
            </li>
            <li className="nav-item">
              <Link to="/exploro" className="nav-link">Explorador</Link>
            </li>
            <li className="nav-item">
              <Link to="capturado" className="nav-link">Capturados</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-warning">Isabel isabel</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
  }
}
