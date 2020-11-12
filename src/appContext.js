import React, { useContext } from 'react';
import { ProductModal } from './components/Modal/ProductModal';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useOpenBasket } from './components/Hooks/useOpenBasket';
import { useAuth } from './components/Hooks/useAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const AppContext = React.createContext();

export const useAppContext = () => useContext(AppContext);

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

export const AppProvider = ({ children }) => {
    const openBasket = useOpenBasket();
    const openItem = useOpenItem();
    const orders = useOrders();
    const auth = useAuth(firebase.auth);

    return (
        <AppContext.Provider
            value={{
                ...openBasket,
                ...openItem,
                ...orders,
                ...auth,
                firebaseDatabase: firebase.database,
            }}
        >
            {children}
            {openItem.openItem && <ProductModal />}
        </AppContext.Provider>
    );
};
