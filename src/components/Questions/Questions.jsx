import React from 'react';
import './questions.css';

const Questions = () => {
    return (
        <div className="questions">
            <div className="container">
                <h2 className="questions__title">Остались вопросы?</h2>
                <p className="questions__subtitle">
                    Оставьте номер телефона, и мы перезвоним вам
                </p>
                <form className="questions__form">
                    <div className="input__group">
                        <input
                            type="text"
                            className="questions__input"
                            placeholder="Ваше имя"
                        />
                    </div>

                    <div className="input__group">
                        <input
                            type="tel"
                            className="questions__input"
                            placeholder="Телефон"
                        />
                    </div>

                    <div className="input__group">
                        <input
                            type="email"
                            className="questions__input"
                            placeholder="E-Mail"
                        />
                    </div>

                    <button type="submit" className="button questions__button">
                        Позвоните мне
                    </button>
                </form>

                <p className="questions__policy">
                    Я даю своё <a href="/">согласие</a> на обработку моих
                    персональных данных.
                </p>
            </div>
        </div>
    );
};

export default Questions;
