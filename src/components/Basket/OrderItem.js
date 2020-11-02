import React from 'react';
import styled from 'styled-components';
import buttonRemove from '../../img/del.svg';
import { totalPrice } from '../Functions/secondaryFun';
import { formatPrice } from '../Functions/secondaryFun';

const Item = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const ItemName = styled.span`
    flex-grow: 1;
`;
const ItemCount = styled.span`
    margin-right: 30px;
`;
const ItemPrice = styled.span`
    margin-right: 14px;
    min-width: 56px;
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

export const OrderItem = ({ order }) => {
    return (
        <Item>
            <ItemName>{order.name}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatPrice(totalPrice(order))}</ItemPrice>
            <ItemRemove></ItemRemove>
        </Item>
    );
};
