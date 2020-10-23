import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo"></div>
                    <div className="header__contacts">
                        <a href="tel:89999991234" className="header__phone">
                            +7 (999) 999 - 1234
                        </a>
                        <a
                            href="/"
                            className="header__callback"
                            onClick={e => e.preventDefault()}
                        >
                            Перезвоните мне
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
