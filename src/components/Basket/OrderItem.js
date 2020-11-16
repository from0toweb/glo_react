import React from 'react';
import styled from 'styled-components';
import buttonRemove from '../../img/trash.svg';
import { totalPrice } from '../Functions/secondaryFun';
import { formatPrice } from '../Functions/secondaryFun';
import { checkedToppings } from '../Functions/secondaryFun';
import _ from 'lodash';

const Item = styled.div`
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: ${({ toppings, choice }) => (toppings || choice ? `0px` : `10px`)};
`;
const ItemName = styled.span`
    flex-grow: 1;
`;
const ItemCount = styled.span`
    margin-right: 30px;
`;
const ItemPrice = styled.span`
    margin-right: 14px;
    min-width: 99px;
    text-align: right;
`;
const ItemRemove = styled.button`
    cursor: pointer;
    width: 19px;
    height: 24px;
    background: url(${buttonRemove}) no-repeat center center/cover;
    background-color: transparent;
    border: none;
    padding: 0;
`;

const OrderToppings = styled.span`
    font-size: 14px;
    color: #9a9a9a;
    display: inline-block;
    margin-bottom: 10px;
`;

export const OrderItem = ({ order, orders, index, setOrders, setOpenItem }) => {
    const removeItem = e => {
        e.stopPropagation();
        const newOrderList = orders.filter(item => {
            return !_.isEqual(item, order);
        });
        setOrders(newOrderList);
    };

    const toppings = order.topping && checkedToppings(order);

    return (
        <>
            <Item
                toppings={toppings}
                choice={order.choice}
                onClick={() => setOpenItem({ ...order, index })}
            >
                <ItemName>{order.name}</ItemName>
                <ItemCount>{order.count}</ItemCount>
                <ItemPrice>{formatPrice(totalPrice(order))}</ItemPrice>
                <ItemRemove onClick={removeItem}></ItemRemove>
            </Item>

            {toppings && <OrderToppings>{toppings}</OrderToppings>}
            {order.choice && <OrderToppings>{order.choice}</OrderToppings>}
        </>
    );
};
