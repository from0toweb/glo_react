import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ListItem } from './ListItem';
import { MainImg } from './MainImg';
import { useFetch } from '../Hooks/useFetch';
import { useAppContext } from '../../appContext';

const MenuStyled = styled.main`
    position: relative;
    background-color: #e3e3e3;
    padding-top: 80px;
    padding-left: ${({ openBasket }) => (openBasket ? `0px` : `50px`)};
    transform: ${({ openBasket }) => (openBasket ? `translateX(380px)` : `translateX(0)`)};
    transition: all 0.5s;
    min-height: 100vh;
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

const ellipsis1 = keyframes`
    0% {
    transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;
const ellipsis3 = keyframes`
    0% {
    transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;
const ellipsis2 = keyframes`
    0% {
    transform: translate(0, 0);
    }
    100% {
        transform: translate(24px, 0);
    }
`;
const PreloadMessage = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Elipsis = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;
    & div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: black;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
        &:nth-child(1) {
            left: 8px;
            animation: ${ellipsis1} 0.6s infinite;
        }
        &:nth-child(2) {
            left: 8px;
            animation: ${ellipsis2} 0.6s infinite;
        }
        &:nth-child(3) {
            left: 32px;
            animation: ${ellipsis2} 0.6s infinite;
        }
        &:nth-child(4) {
            left: 56px;
            animation: ${ellipsis3} 0.6s infinite;
        }
    }
`;

export const Menu = () => {
    const { setOpenItem, openBasket, firebaseDatabase } = useAppContext();
    const res = useFetch(firebaseDatabase);
    const dbMenu = res.response;

    return (
        <MenuStyled openBasket={openBasket}>
            <MainImg />
            {dbMenu ? (
                <>
                    <Section>
                        <H2>Бургеры</H2>
                        <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
                    </Section>
                    <Section>
                        <H2>Закуски / Напитки</H2>
                        <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
                    </Section>
                </>
            ) : res.error ? (
                <PreloadMessage>Приносим извинения! Мы скоро Все исправим!</PreloadMessage>
            ) : (
                <PreloadMessage>
                    <Elipsis>
                        Загрузка...
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </Elipsis>
                </PreloadMessage>
            )}
        </MenuStyled>
    );
};
