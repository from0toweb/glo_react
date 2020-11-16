import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../appContext';
import thankImg from '../../img/done.svg';
import { Modal } from '../Styles/ModalStyle';

const ThanksDialog = styled.div`
    position: relative;
    max-width: 600px;
    width: 100%;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    background-color: #fff;
`;
const ThanksImg = styled.span`
    width: 80px;
    height: 80px;
    background: url(${thankImg});
    margin-bottom: 30px;
`;
const ThanksText = styled.h3``;

export const ThankPopup = () => {
    const { closeThankPopup } = useAppContext();
    return (
        <Modal id="thank" onClick={closeThankPopup}>
            <ThanksDialog>
                <ThanksImg />
                <ThanksText>
                    Спасибо за заявку! <br /> Мы скоро с Вами свяжемся
                </ThanksText>
            </ThanksDialog>
        </Modal>
    );
};
