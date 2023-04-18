//1.- Importar useContext
import React, {useState, useContext} from 'react';
import car from '@assets/car.png'
import '@styles/ProductItem.scss'
//3.- Importar AppContext
import AppContext from '@context/AppContext';

import { useNavigate } from 'react-router-dom';



const ProductItem = ({product}) => {
  const navigate = useNavigate();

  //2.- Llamado del estado del carrito
  const{agregarCarrito} = useContext(AppContext)

  const [cart, setCart] = useState([])
  //const ProductList = [{allProducts, setAllProduct}] 

  //4.- Crear handleClick
  const handleClick = item=>{
    agregarCarrito(item);

    // setCart([...cart, item])
    // // console.log("Add")
    // // agregarCarrito(item)
    // console.log(agregarCarrito)
    console.log(product)
  }

  const handleClickProducto = (product) => {
    navigate(`/producto/${product.id}`, {
        state: {
            name: product.name,
            image_url: product.image_url,
            description: product.description,
            price: product.price,
        },
   });
}
  // const handleClick = item=>{
  //   setCart([...cart, item])
  //   //agregarCarrito({...product, item});
  //   // console.log("Add")
  //   //agregarCarrito(item)
  //   console.log(item)
  //}
  // console.log(cart)
    return (
        <div className="ProductItem">
          
        {/* <img src={product.image_url} alt='producto' className="ProductItem-img"  /> */}
        <img src={product.image_url} alt={product.name} className='ProductItem-img' onClick={() => handleClickProducto(product)} /> 
        <div className="info-product-item">
          <div>
            <p>${product.price}</p>
            <p>{product.name}</p>
            <p>{product.manufacturer} {product.active_ingredient} {product.strength} {product.form}</p> 
          </div>
          
          <figure onClick={() => handleClick(product)}>
            <img src={car} alt="guantes" className='guantes' />
          </figure> 
     
        </div>
      </div>
    );
}

export default ProductItem;