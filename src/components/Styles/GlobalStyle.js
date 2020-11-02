import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    }

    body {
        margin: 0;
        background-color: #f0f0f0;
        font-size: 20px;
        color: black;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    img {
        max-width: 100%;
        height: auto
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    h1,
    h2,
    h3
    {
        font-family: Pacifico, sans-serif;
        padding: 0;
        margin: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }
    button {
        cursor: pointer;
    }
    input,button {
        font-family: inherit;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    #root {
        overflow-x: hidden;
    }
`;
