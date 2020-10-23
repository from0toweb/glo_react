import React from 'react';
import './main.css';

const Main = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="main__block">
                    <h1 className="main__title">
                        Заголовок c уникальным торговым предложение по системе
                        4U
                    </h1>
                    <p className="main__description">
                        Описания предлжения компании. Сайт рыбатекст поможет
                        дизайнеру, верстальщику, вебмастеру сгенерировать
                        несколько абзацев более менее осмысленного текста рыбы
                        на русском языке, а начинающему.
                    </p>
                    <button className="button main__button">Подробнее</button>
                </div>
            </div>
        </section>
    );
};

export default Main;
