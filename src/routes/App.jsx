import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CrearCuenta from '@pages/CrearCuenta';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import NoEncontrado from '@pages/NoEncontrado';
import Menu from '@components/Menu';
import MiCuenta from '@pages/MiCuenta';
import ProductInfo from '@components/ProductInfo';
//1.- Importar AppContext
import AppContext from '@context/AppContext';
//3.- Importar useEstadoInicial
import useEstadoInicial  from '@hooks/useEstadoInicial';

const App = () => {
    const estadoInicial=useEstadoInicial()
    return (
        //2.- Trabajar con el provider para encapsular nuestra App

        //4.- Compartir estadoInicial con appContext
        <AppContext.Provider value ={estadoInicial}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/CrearCuenta' element={<CrearCuenta />} />
                <Route path='*' element={<NoEncontrado />} /> 
                <Route path='/Login' element={<Login />} />   
                <Route path='/Home' element={<Home />} />   
                <Route path='/Menu' element={<Menu />} />     
                <Route path='/MiCuenta' element={<MiCuenta />} />      
                <Route path='/producto/:id' element={<ProductInfo />} />
            </Routes>
            </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;