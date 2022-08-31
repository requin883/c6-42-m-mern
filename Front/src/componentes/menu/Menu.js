import React, { useContext } from 'react';
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SessionContext } from '../context/sessionContext.js';
import SignIn from './signIn/SignIn.js';  
import '../menu/signIn/modales.css';

// import SignOut from './signOut/SignOut.js';


const Menu = () => {
  const { userInfo } = useContext(SessionContext);
      return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#Home"><strong>Deportes Online</strong></a>
        <div className="collapse navbar-collapse align-content-right">
          <ul className="navbar-nav ms-auto">
          <li className="nav-link dropdown m-1">
          <Dropdown>
            <Dropdown.Toggle >Menú</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#Nosotros">Nosotros</Dropdown.Item>
            <Dropdown.Item href="#Clubes">Clubes</Dropdown.Item>
            <Dropdown.Item href="#Profesores">Profesores</Dropdown.Item>  
            <Dropdown.Item href="#Tarifas">Tarifas</Dropdown.Item>
            <Dropdown.Item href="#Reservas">Reservas</Dropdown.Item>
            <Dropdown.Item href="#Contacto">Contacto</Dropdown.Item>  
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <div><li className="nav-link">{ userInfo?.username ? <Link to={`/login/${userInfo.username}`}>{userInfo.username}</Link> : <SignIn/> }</li></div>
        {/* <li id="nav-item"><SignOut/></li>  */}
        </ul> 
        </div>
      </div>
  </nav>
  )
}

export default Menu;