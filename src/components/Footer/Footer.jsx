import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__block">
                        <div className="footer__logo"></div>
                        <p className="footer__rights">
                            © 2020 XXXcompany. Все права защищены.
                        </p>
                    </div>
                    <span className="footer__executor">
                        Сделанно "From0toWeb"
                    </span>
                    <div className="footer__contacts">
                        <a href="tel:89999991234" className="footer__phone">
                            +7 (999) 999 - 1234
                        </a>
                        <a
                            href="/"
                            className="footer__callback"
                            onClick={e => e.preventDefault()}
                        >
                            Перезвоните мне
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
