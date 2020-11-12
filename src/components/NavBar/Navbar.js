import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import loginImg from '../../img/sign.svg';
import { useAppContext } from '../../appContext';

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
    background-color: #1e235d;
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

const LogoutImage = styled(LoginImg)`
    height: 32px;
    border-radius: 50%;
`;

export const Navbar = () => {
    const { authentication, login, logout } = useAppContext();
    return (
        <>
            <NavbarHeader>
                <Logo>
                    <Img src={logoImg} alt="logo" />
                    <LogoText>MrDonald's</LogoText>
                </Logo>

                {authentication ? (
                    <Login onClick={logout}>
                        <LogoutImage
                            src={authentication.photoURL}
                            alt="login"
                        />
                        выйти
                    </Login>
                ) : (
                    <Login onClick={login}>
                        <LoginImg src={loginImg} alt="login" />
                        войти
                    </Login>
                )}
            </NavbarHeader>
        </>
    );
};
