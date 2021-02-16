import React from 'react';
import './header.scss';
import logo from '../../assets/logo.png';
import svgSprite from '../../assets/icons.svg';
import SearchForm from '../../components/searchForm/SearchForm';

const Header = () => {

    return(
        <div className="header">
            <img src={logo} alt="Logo" className="header-img"/>;
            <SearchForm />
            <div className="header-like">
                <svg>
                    <use xlinkHref={`${svgSprite}#icon-heart`} />
                </svg>
            </div>
        </div>
    )
};

export default Header;