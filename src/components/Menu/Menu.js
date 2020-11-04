import React from 'react';
import styled from 'styled-components';
import dbmenu from '../DBMenu';
import { ListItem } from './ListItem';
import { MainImg } from './MainImg';

const MenuStyled = styled.main`
    background-color: #ccc;
    padding-top: 80px;
    padding-left: ${({ openBasket }) => (openBasket ? `0px` : `50px`)};
    transform: ${({ openBasket }) =>
        openBasket ? `translateX(380px)` : `translateX(0)`};
    transition: all 0.5s;
`;

const H2 = styled.h2`
    margin-bottom: 20px;
    padding-left: 15px;
`;

const Section = styled.section`
    max-width: 1400px;
    margin: 0px auto;
    padding: 0px 15px;
`;
export const Menu = ({ setOpenItem, openBasket, setOpenBasket }) => {
    const { burger, other } = dbmenu;
    return (
        <MenuStyled openBasket={openBasket}>
            <MainImg />
            <Section>
                <H2>Бургеры</H2>
                <ListItem itemList={burger} setOpenItem={setOpenItem} />
            </Section>
            <Section>
                <H2>Закуски / Напитки</H2>
                <ListItem itemList={other} setOpenItem={setOpenItem} />
            </Section>
        </MenuStyled>
    );
};
