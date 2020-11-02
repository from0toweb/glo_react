import React from 'react';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { Menu } from './components/Menu/Menu';
import { Navbar } from './components/NavBar/Navbar';
import { ProductModal } from './components/Modal/ProductModal';
import { Basket } from './components/Basket/Basket';

const App = () => {
    const openItem = useOpenItem();
    const orders = useOrders();

    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Menu {...openItem} />
            <Basket {...orders} />
            {openItem.openItem && <ProductModal {...openItem} {...orders} />}
        </>
    );
};
export default App;
