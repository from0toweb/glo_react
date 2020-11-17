import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../appContext';
import basketLogo from '../../img/basket.svg';
import closeArrow from '../../img/left-arrow.svg';
import { formatPrice, totalPrice } from '../Functions/secondaryFun';
import {
    BasketTitle,
    OrderTotal,
    PopupButton,
    TotalCount,
    TotalName,
    TotlalPrice,
} from '../Styles/ModalStyle';
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
    transform: translateX(${({ openBasket }) => (openBasket ? `0px` : `-330px`)});
    transition: 0.5s;
    @media (max-width: 380px) {
        width: 100%;
        transform: translateX(${({ openBasket }) => (openBasket ? `0px` : `calc(-100% + 40px)`)});
    }
`;
const CloseBasket = styled.span`
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 30px;
    background: url(${closeArrow}) no-repeat center center/50%;
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

const OpenBasket = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ openBasket }) => (openBasket ? `0px` : `50px`)};
    transition: 0.5s;
    @media (max-width: 380px) {
        width: ${({ openBasket }) => (openBasket ? `0px` : `40px`)};
    }
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

export const Basket = () => {
    const {
        orders,
        setOrders,
        openBasket,
        setOpenBasket,
        setOpenItem,
        authentication,
        login,
        setOpenOrderConfirm,
    } = useAppContext();

    const total = orders.reduce((result, order) => totalPrice(order) + result, 0);

    const totalCount = orders.reduce((result, order) => order.count + result, 0);

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
                {orders.length !== 0 && (
                    <OrderTotal>
                        <TotalName>Итого</TotalName>
                        <TotalCount>{totalCount}</TotalCount>
                        <TotlalPrice>{formatPrice(total)}</TotlalPrice>
                    </OrderTotal>
                )}
            </Order>
            <PopupButton
                disabled={orders.length === 0}
                onClick={authentication ? () => setOpenOrderConfirm(true) : login}
            >
                Оформить
            </PopupButton>
        </MainBasket>
    );
};
