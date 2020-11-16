import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import React from 'react';
import { AppContext } from './appContext';
import { Basket } from './components/Basket/Basket';
import { OrderConfirm } from './components/Basket/OrderConfirm';
import { useAuth } from './components/Hooks/useAuth';
import { useOpenBasket } from './components/Hooks/useOpenBasket';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrderConfirm } from './components/Hooks/useOrderConfirm';
import { useOrders } from './components/Hooks/useOrders';
import { Menu } from './components/Menu/Menu';
import { ProductModal } from './components/Modal/ProductModal';
import { Navbar } from './components/NavBar/Navbar';
import { GlobalStyle } from './components/Styles/GlobalStyle.js';

const firebaseConfig = {
    apiKey: 'AIzaSyB7OuOUIPgOhKFLAe1qUqSjEZxPWHCzeRM',
    authDomain: 'glo-react-a2985.firebaseapp.com',
    databaseURL: 'https://glo-react-a2985.firebaseio.com',
    projectId: 'glo-react-a2985',
    storageBucket: 'glo-react-a2985.appspot.com',
    messagingSenderId: '1039225055118',
    appId: '1:1039225055118:web:c60cd64ed2a92a238266df',
};

firebase.initializeApp(firebaseConfig);

const App = () => {
    const openBasket = useOpenBasket();
    const openItem = useOpenItem();
    const orders = useOrders();
    const auth = useAuth(firebase.auth);
    const orderConfirm = useOrderConfirm();

    return (
        <AppContext.Provider
            value={{
                ...openBasket,
                ...openItem,
                ...orders,
                ...auth,
                ...orderConfirm,
                firebaseDatabase: firebase.database,
            }}
        >
            <GlobalStyle />
            <Navbar />
            <Menu />
            <Basket />
            {openItem.openItem && <ProductModal />}
            {orderConfirm.openOrderConfirm && <OrderConfirm />}
        </AppContext.Provider>
    );
};
export default App;
