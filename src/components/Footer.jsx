import React from 'react';
import '@styles/Footer.scss';
import instagram from '@assets/instagram.png'
import facebook from '@assets/facebook.png'
import twitter from '@assets/twitter.png'

const Footer = () => {

    return (
        <footer className='footer' id='footer'>
            <div class="container-farm">
                <div class="row-farm">
                    <div class="columnas">
                        <p class="p-farm">Información de contacto:</p>
                        <ul class="ul-farm">
                            <li class="li-fo">Dirección: Arco de la sabiduria 2038-65</li>
                            <li class="li-fo">Teléfono: 334-098=9876</li>
                            <li class="li-fo">Correo electrónico: pharmacyweb@gmail.com</li>
                        </ul>
                    </div>
                    <div class="columnas">
                        <p class="p-far">Síguenos en las redes sociales:</p>
                        <div class="social-icons">
                        <img src={facebook}  className='img-farm' /> 
                        <img src={instagram}  className='img-farm' /> 
                        <img src={twitter}  className='img-farm' /> 
                        </div>
                    </div>
                </div>
                <p class="text-center">© 2023 www.pharmacy.com</p>
            </div>
        </footer>
    );
};

export default Footer;