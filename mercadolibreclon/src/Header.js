import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src='https://upload.wikimedia.org/wikipedia/commons/d/d4/MercadoLibre_logo.PNG' alt="meli" />
            <div className="header_search">
                <input className="header_searchInput" type="text" placeholder="Buscar productos, marcas y mas..." />
                <SearchIcon className="header_searchIcon" />
            </div>
            {/* <img className="header_logoCredito" src='https://http2.mlstatic.com/resources/deals/exhibitors_resources/mla-menu-desktop-notification-picture-52b026dd-9270-4c0f-8b85-a7526d0b3a63.png' alt="meli" /> */}
            {/* https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-dff4b37f-acd2-43de-900c-ab2b7b778ccf.jpg */}
            {/* https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-5be2c899-b1c7-4608-9f4a-59d5b24bcfb5.jpg */}
            {/* https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-c0cfd497-0fff-4297-bc8b-c0620a37ef47.jpg */}
            {/* https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-e55607e0-6fa4-4506-82ef-8a683436cf9c.jpg */}
            {/* https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mla-home-desktop-slider-picture-a756983c-89cb-49b6-b787-e37a8c8340e0.png */}
            <div className="header_nav">
           
                <div className='header_option'>
                    
                    <span className="header_optionLineOne header_localAtm"><strong><LocalAtmIcon /> Compra hoy y pagá después</strong></span>
                    <span className="header_optionLineTwoo">Creá tu cuenta</span>
                </div>
                <div className='header_option'>
                    <span className="header_optionLineTwoo">Ingresá</span>

                </div>

                <div className="header_optionBascket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwoo header_bascketCount"></span>
                </div>

            </div>
        </div>
    )
}

export default Header
