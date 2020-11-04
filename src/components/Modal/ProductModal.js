import React from 'react';
import styled from 'styled-components';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPrice, formatPrice } from '../Functions/secondaryFun';
import buttonIcon from '../../img/shopping-cart.svg';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';

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

export const PopupButton = styled.button`
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    width: 200px;
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
    &:disabled {
        background-color: #ccc;
    }
`;

const ButtonIcon = styled.span`
    display: inline-block;
    width: 25px;
    height: 25px;
    vertical-align: sub;
    background: url(${buttonIcon}) no-repeat center center/100%;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 20px 40px 40px;
    align-items: flex-start;
`;

const ModalTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
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

const ModalFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ProductModal = ({ openItem, setOpenItem, orders, setOrders }) => {
    const counter = useCount();
    const toppings = useToppings(openItem);
    const choices = useChoices();

    const closeModal = e => {
        if (e.target.id === 'modal') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <Modal id="modal" onClick={closeModal}>
            <ModalDialog>
                <ModalBaner img={openItem.img} />
                <ModalContent>
                    <ModalTitle>
                        <H3>{openItem.name}</H3>
                        <Price>{formatPrice(openItem.price)}</Price>
                    </ModalTitle>
                    {openItem.toppings && <Toppings {...toppings} />}
                    {openItem.choices && (
                        <Choices {...choices} openItem={openItem} />
                    )}
                    <ModalFooter>
                        <CountItem {...counter} />
                        <PopupButton
                            onClick={addToOrder}
                            disabled={openItem.choices && !choices.choice}
                        >
                            <ButtonIcon />
                            {formatPrice(totalPrice(order))}
                        </PopupButton>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </Modal>
    );
};
