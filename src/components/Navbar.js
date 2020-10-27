import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import loginImg from '../img/sign.svg';

const NavbarHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299b01;
    color: white;
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
`;
const LogoText = styled.span`
    font-size: 24px;
    margin-left: 15px;
    font-family: Pacifico, sans-serif;
`;
const Img = styled.img`
    width: 50px;
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
                <Logo>
                    <Img src={logoImg} alt="logo" />
                    <LogoText>MrDonald's</LogoText>
                </Logo>

                <Login>
                    <LoginImg src={loginImg} alt="login" />
                    войти
                </Login>
            </NavbarHeader>
        </>
    );
};
