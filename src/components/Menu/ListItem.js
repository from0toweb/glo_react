import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    position: relative;
    cursor: pointer;
    width: 400px;
    height: 155px;
    background: ${({ img }) => `url(${img})`} no-repeat center center/105% 110%;
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.3));
    color: #fff;
    font-size: 30px;
    margin: 15px;
    padding: 10px;
    z-index: 1;
    transition: all 0.3s;
    transition: background-size 0.5s;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0px;
        right: 0px;
        background-color: #000;
        opacity: 30%;
        z-index: -1;
        transition: all 0.3s;
    }
    &:hover {
        filter: drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.35));
        background-size: 120% 120%;
        &:after {
            opacity: 40%;
        }
    }
    @media (max-width: 510px) {
        background-size: cover;
        margin: 15px 0px;
        height: 190px;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const ListItem = ({ itemList, setOpenItem }) => {
    return (
        <Wrapper>
            {itemList.map(item => {
                const { name, img, id, price } = item;
                return (
                    <Item key={id} img={img} onClick={() => setOpenItem(item)}>
                        <span>{name}</span>
                        <p>
                            {price.toLocaleString('ru-Ru', {
                                style: 'currency',
                                currency: 'RUB',
                            })}
                        </p>
                    </Item>
                );
            })}
        </Wrapper>
    );
};
