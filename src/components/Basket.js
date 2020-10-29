import React from 'react';
import styled from 'styled-components';
import closeArrow from '../img/left-arrow.svg';
import { PopupButton } from './ProductModal';
import { OrderItem } from './OrderItem';

const MainBasket = styled.div`
    position: fixed;
    top: 80px;
    left: 0px;
    width: 380px;
    background-color: #fff;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 30px 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
const CloseBasket = styled.span`
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 10px;
    background: url(${closeArrow}) no-repeat center center/cover;
`;

const BasketTitle = styled.h2`
    text-transform: uppercase;
    font-size: 39px;
    font-weight: normal;
`;

const Order = styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0px 35px;
`;
const OrderList = styled.div``;
const OrderTotal = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
const TotalName = styled.span`
    flex-grow: 1;
`;
const TotalCount = styled.span`
    margin-right: 30px;
`;
const TotlalPrice = styled.span`
    margin-right: 14px;
    min-width: 56px;
    text-align: right;
`;

export const Basket = () => {
    return (
        <MainBasket>
            <CloseBasket></CloseBasket>
            <BasketTitle>Ваш заказ</BasketTitle>
            <Order>
                <OrderList>
                    <OrderItem text="1250р" />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </OrderList>
                <OrderTotal>
                    <TotalName>Итого</TotalName>
                    <TotalCount>5</TotalCount>
                    <TotlalPrice>350Р</TotlalPrice>
                </OrderTotal>
            </Order>
            <PopupButton>оформить</PopupButton>
        </MainBasket>
    );
};
