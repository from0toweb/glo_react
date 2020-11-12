import React from 'react';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import { Menu } from './components/Menu/Menu';
import { Navbar } from './components/NavBar/Navbar';
import { Basket } from './components/Basket/Basket';
import { AppProvider } from './appContext';

const App = () => {
    return (
        <AppProvider>
            <GlobalStyle />
            <Navbar />
            <Menu />
            <Basket />
        </AppProvider>
    );
};
export default App;
