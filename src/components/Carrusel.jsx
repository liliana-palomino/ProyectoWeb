import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import '@styles/Carrusel.scss';

const logox = 'http://dtai.uteq.edu.mx/~mirdie197/Imagenes/promocion';

const Carrusel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          
          <li
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '250px',
              height: '250px',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Item {i}
          </li>,
              <img src={`${logox}${i+1}.avif`} className='imagenCarr'/>
        ))}
        
        
       
      </ul>
      <div className='enumeracion'>
       
      <button className='botonCar' onClick={() => prev()}>Anterior</button>
      <div className='textoBotonCar'>
      {activePageIndex + 1} / {pages.length}
      </div> 
      <button className='botonCar' onClick={() => next()}>Siguiente</button>

      </div>
     
    </>
  );
};

export default Carrusel;