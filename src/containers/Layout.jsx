import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

// const Layout = ({children}) => {
//     return (
//         <div className='Layout'>
//             <Header/>
           
//             {children}
//             <Footer/>
//         </div>
//     )

const Layout = ({children}) => {
    const url = window.location.href;
    function viewHeader() {
        if (url.includes('Login') || url.includes('CrearCuenta')) {
            window.location.reload
            return false
        } else { 
            window.location.reload
            return true }
    }

    return (
        <div className='Layout'>
             {viewHeader()? <Header/> : null }
            {children}
            {viewHeader()? <Footer /> : null }
        </div>
    );
};
// }

export default Layout;