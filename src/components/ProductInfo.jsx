import React, {useContext, useState} from "react";
import "@styles/ProductInfo.scss";
import AppContext from '@context/AppContext';
import { useLocation, useParams } from "react-router-dom";



//Para favoritos
import noFavorito from '@assets/noFavorito.png';
import favorito from '@assets/favorito.png';
import car from '@assets/car.png';  


const ProductInfo = (product) => {
  const { id } = useParams();
  const { state } = useLocation();

  const { agregarCarrito, agregarFavoritos } = useContext(AppContext);

  const handleClick = () => {
    agregarCarrito(state);
  };
  const handleClickFav = item=>{
    agregarFavoritos(item);

    //console.log("LOS FAVORITOS AGREGADOS EN EL ARREGLO: "+ favoritos );
    // setCart([...cart, item])
    // // console.log("Add")
    // // agregarCarrito(item)
    // console.log(agregarCarrito)
    console.log(product);
    handleFavoriteClick();
  }

    //Para favoritos
const [isFavorite, setIsFavorite] = useState(false);

const handleFavoriteClick = () => {
  setIsFavorite(!isFavorite);
};
  return (
    <div >

    
    {/* <Carrusel style={{flex:1}}/> */}
    <div className="product-info-container">
        
      <div className="product-image">
        <img src={state.image_url} alt={state.name} className="full-size-image" />
      </div>
      <div className="product-details">
        <h1>{state.name}</h1>
        <p>{state.description}</p>
        <ul>
          <li>Precio: ${state.price}</li>
        </ul>

      <div className="fav-car">
        <button onClick={() => handleClick()} >Agregar al carrito </button>
        {/* <figure onClick={() => handleClick(product)}>
            <img src={car} alt="guantes" className='favoritos' />
          </figure>  */}
         {/* <figure  
            //onClick={() => handleClickFav(product)} 
              onClick={handleFavoriteClick}
            >
            <img  src={isFavorite ? favorito : noFavorito} alt="favoritos" className='favoritos' />
        </figure>  */}
      
    </div>

      </div>
    </div>
    </div>
  );
};

export default ProductInfo;