import React from 'react';
import styled from 'styled-components';
import closeArrow from '../../img/left-arrow.svg';
import basketLogo from '../../img/basket.svg';
import { PopupButton } from '../Modal/ProductModal';
import { OrderItem } from './OrderItem';
import { totalPrice } from '../Functions/secondaryFun';
import { formatPrice } from '../Functions/secondaryFun';
import { projection } from '../Functions/secondaryFun';
import _ from 'lodash';

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
    transform: translateX(
        ${({ openBasket }) => (openBasket ? `0px` : `-330px`)}
    );
    transition: 0.5s;
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
    min-width: 99px;
    text-align: right;
`;

const OpenBasket = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ openBasket }) => (openBasket ? `0px` : `50px`)};
    transition: 0.5s;
`;
const OpenImg = styled.span`
    position: relative;
    cursor: pointer;
    width: 25px;
    height: 25px;
    background: url(${basketLogo}) no-repeat center center/100%;
    &::before {
        content: '';
        display: ${({ totalCount, openBasket }) =>
            totalCount <= 0 || openBasket ? `none` : `block`};
        position: absolute;
        right: 4px;
        top: 0px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: red;
    }
`;

const Empty = styled.p`
    text-align: center;
`;

export const Basket = ({
    orders,
    setOrders,
    openBasket,
    setOpenBasket,
    setOpenItem,
    authentication,
    login,
    firebaseDatabase,
}) => {
    const dataBase = firebaseDatabase();

    const rulesData = {
        name: ['name'],
        price: ['price'],
        count: ['count'],
        topping: [
            'topping',
            arr => arr.filter(item => item.checked).map(item => item.name),
        ],
        choise: ['choise', item => (item ? item : 'no choise')],
    };

    const sendOrder = () => {
        const newOrder = orders.map(projection(rulesData));

        dataBase.ref('orders').push().set({
            clientName: authentication.displayName,
            clientEmail: authentication.email,
            order: newOrder,
        });
        setOrders([]);
    };

    const total = orders.reduce(
        (result, order) => totalPrice(order) + result,
        0
    );

    const totalCount = orders.reduce(
        (result, order) => order.count + result,
        0
    );

    return (
        <MainBasket openBasket={openBasket}>
            <CloseBasket onClick={() => setOpenBasket(false)} />
            <OpenBasket openBasket={openBasket}>
                <OpenImg
                    onClick={() => setOpenBasket(true)}
                    totalCount={totalCount}
                    openBasket={openBasket}
                />
            </OpenBasket>
            <BasketTitle>Ваш заказ</BasketTitle>
            <Order>
                <OrderList>
                    <hr />
                    {orders.length ? (
                        orders.map((order, index) => {
                            const key = _.uniqueId();
                            return (
                                <OrderItem
                                    key={key}
                                    order={order}
                                    orders={orders}
                                    index={index}
                                    setOrders={setOrders}
                                    setOpenItem={setOpenItem}
                                />
                            );
                        })
                    ) : (
                        <Empty>Список заказов пуст</Empty>
                    )}
                </OrderList>
                <OrderTotal>
                    <TotalName>Итого</TotalName>
                    <TotalCount>{totalCount}</TotalCount>
                    <TotlalPrice>{formatPrice(total)}</TotlalPrice>
                </OrderTotal>
            </Order>
            <PopupButton onClick={authentication ? sendOrder : login}>
                Оформить
            </PopupButton>
        </MainBasket>
    );
};
