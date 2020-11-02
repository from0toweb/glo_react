import React from 'react';
import styled from 'styled-components';
import dbmenu from '../DBMenu';
import { ListItem } from './ListItem';
import { MainImg } from './MainImg';

const MenuStyled = styled.main`
    background-color: #ccc;
    padding-top: 80px;
    transform: translateX(380px);
`;

const H2 = styled.h2`
    margin-bottom: 20px;
    padding-left: 15px;
`;

const Section = styled.section`
    padding: 0px 15px;
`;
export const Menu = ({ setOpenItem }) => {
    const { burger, other } = dbmenu;
    return (
        <MenuStyled>
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
