import React from 'react';
import styled from 'styled-components';
import './navbar.css';
import logoImg from '../img/logo.svg';
import loginImg from '../img/sign.svg';

const NavbarHeader = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #299b01;
    color: white;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    transform: rotate(-90deg);
    transform-origin: 25px center;
`;
const LogoText = styled.span`
    font-size: 24px;
    font-family: Pacifico, sans-serif;
    margin-left: 15px;
`;
const Img = styled.img`
    width: 50px;

    transform: rotate(90deg);
`;
const Login = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    line-height: 19px;
`;
const LoginImg = styled.img`
    width: 32px;
    display: block;
    margin: auto;
    margin-bottom: 3px;
`;

export const Navbar = () => {
    return (
        <>
            <NavbarHeader>
                <Login>
                    <LoginImg src={loginImg} alt="login" />
                </Login>
                <Logo>
                    <Img src={logoImg} alt="logo" />
                    <LogoText>MrDonald's</LogoText>
                </Logo>
            </NavbarHeader>
        </>
    );
};
