import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './components/Styles/GlobalStyle';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useOpenBasket } from './components/Hooks/useOpenBasket';
import { useAuth } from './components/Hooks/useAuth';
import { Menu } from './components/Menu/Menu';
import { Navbar } from './components/NavBar/Navbar';
import { ProductModal } from './components/Modal/ProductModal';
import { Basket } from './components/Basket/Basket';

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

    return (
        <>
            <GlobalStyle />
            <Navbar {...auth} />
            <Menu
                {...openItem}
                {...openBasket}
                firebaseDatabase={firebase.database}
            />
            <Basket
                {...orders}
                {...openBasket}
                {...openItem}
                {...auth}
                firebaseDatabase={firebase.database}
            />
            {openItem.openItem && <ProductModal {...openItem} {...orders} />}
        </>
    );
};
export default App;
