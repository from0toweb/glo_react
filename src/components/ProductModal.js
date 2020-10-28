import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
`;

const ModalDialog = styled.div`
    max-width: 600px;
    height: 600px;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;
const ModalBaner = styled.div`
    width: 100%;
    height: 200px;
    background: url(${({ img }) => img}) no-repeat center center/cover;
`;

const PopupButton = styled.button`
    width: 220px;
    padding: 15px 20px;
    border: none;
    outline: none;
    border-radius: 33px;
    filter: drop-shadow(0px 7px 16px rgba(30, 35, 93, 0.2));
    color: #fff;
    background-color: #1e235d;
    font-size: 19px;
    line-height: 22px;
    transition: all 0.5s;
    &:hover {
        filter: drop-shadow(0px 7px 20px rgba(30, 35, 93, 0.3));
        transition: all 0.5s;
        background-color: #151b5f;
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 20px 40px 40px;
    align-items: center;
`;

const ModalTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const H3 = styled.h3`
    font-size: 30px;
    font-weight: normal;
`;
const Price = styled.span`
    font-family: Pacifico;
    font-size: 30px;
    font-weight: normal;
`;

export const ProductModal = ({ openItem, setOpenItem }) => {
    const closeModal = e => {
        if (e.target.id === 'modal') {
            setOpenItem(null);
        }
    };
    if (!openItem) return null;
    return (
        <Modal id="modal" onClick={closeModal}>
            <ModalDialog>
                <ModalBaner img={openItem.img} />
                <ModalContent>
                    <ModalTitle>
                        <H3>{openItem.name}</H3>
                        <Price>
                            {openItem.price.toLocaleString('ru-Ru', {
                                style: 'currency',
                                currency: 'RUB',
                            })}
                        </Price>
                    </ModalTitle>
                    <PopupButton>Добавить</PopupButton>
                </ModalContent>
            </ModalDialog>
        </Modal>
    );
};
