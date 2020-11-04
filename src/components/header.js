import React from 'react';
import { ImSearch, ImEarth } from 'react-icons/im';

const Header = () => {
    return (
        <header className="header">
            <div className="input">
                <ImSearch className="input__logo" />
                <input type="text" className="input__text" />
            </div>
            <div className="lang">
                <ImEarth className="lang__logo" />
                <p className="lang__text">EN</p>
            </div>
            <div className="buttons">
                <button>Login</button>
                <button>Try Now</button>
            </div>
        </header>
    )
}
export default Header;