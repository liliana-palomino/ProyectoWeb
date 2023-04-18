//2.- Importar useContext
import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import menu from '@assets/menu.png';
import logo from '@assets/logo1.png';
import cartAgregar from '@assets/carritocompras.png';
import Menu from '@components/Menu';
import Categorias from '@components/Categorias';
import Carrito from '@containers/Carrito'
import {useNavigate} from 'react-router-dom';

//1.- Importar AppContext
import AppContext from '../context/AppContext';

const Header = () => {
  //Se crean las variables
  const  [toggle, setToggle] = useState(false)
  //3.- cREAR LA CONSTANTE PARA EL ESTADO DE CONTEXT
  const {state} = useContext(AppContext)
  //Crear funcion que actualiza el estado
  const handleToggle = () =>{
    setToggle(!toggle)

  }
  
  //Se crean las variables
  const  [categorias, setCategorias] = useState(false)
  //Crear funcion que actualiza el estado
  const handleCategorias = () =>{
    setCategorias(!categorias)
  }

    //Se crean las variables
    const  [carrito, setCarrito] = useState(false)
    //Crear funcion que actualiza el estado
    const handleCarrito = () =>{
      console.log("Hola")
      setCarrito(!carrito)
    }

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/Home');
  };
  const navigateToLogin = () => {
    navigate('/Login');
  };

  return (
    <nav>
     
      <img src={menu} alt='menu' className='menu' onClick={handleCategorias} />
      <img src={logo} alt className='logo-header' />
      <div className='navbar-izquierda'>
       
        <ul>
          <li>
            <a onClick={navigateToHome}>Todos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Analgésicos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antipiréticos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antialérgicos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antidiarreicos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Antimicóticos</a>
          </li>
          <li>
            <a onClick={navigateToHome}>Otros</a>
          </li>
        </ul>
      </div>
      <div className='navbar-derecha'>
        <ul>
          <li className='navbar-email' onClick={handleToggle}>
            <a onClick={navigateToLogin}>Ingresar</a>
          </li>
          <li className='navbar-email' onClick={handleToggle}>
            <a>Tu Cuenta</a>
          </li>
          <li className='navbar-carrito' >
            <img src={cartAgregar} alt='carrito-compras' className='carrito' onClick={handleCarrito}  />
            {/* 4.- Hacer la validacion si carrito tiene elementos */}
            {state.carrito.length > 0 ? <div> {state.carrito.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
      {categorias && <Categorias/>}
      {carrito && <Carrito/>}
    </nav>
  );
};

export default Header;
