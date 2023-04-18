import React from 'react';
import '@styles/Home.scss';
import ProductList from '@containers/ProductList';
import Carrusel from '@components/Carrusel';

const Home = () => {
  return (
    <> 
    
    <Carrusel/>
    <div className="titulo-home" >
      Productos
    </div> 
    <ProductList/>
    
    </>
  );
};

export default Home;
