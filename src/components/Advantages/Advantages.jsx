import React from 'react';
import './advantages.css';
const Advantages = () => {
    return (
        <section className="advantages">
            <div className="container">
                <h2 className="advantages__title">
                    Уникальный заголовок для преимущества компании
                </h2>
                <span className="advantages__subtitle">О нас</span>
                <p className="advantages__text">
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного
                    текста рыбы на русском языке, а начинающему оратору
                    отточить.
                </p>

                <div className="advantages__wrap">
                    <div className="advantages__item">
                        <div className="advantages__number">1</div>
                        <div className="advantages__description">
                            Первое целевое преимущество
                        </div>
                    </div>

                    <div className="advantages__item">
                        <div className="advantages__number">2</div>
                        <div className="advantages__description">
                            Второе целевое преимущество
                        </div>
                    </div>

                    <div className="advantages__item">
                        <div className="advantages__number">3</div>
                        <div className="advantages__description">
                            Третье целевое преимущество
                        </div>
                    </div>

                    <div className="advantages__item">
                        <div className="advantages__number">4</div>
                        <div className="advantages__description">
                            Четвертое целевое преимущество
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
