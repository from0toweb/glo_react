import React from 'react';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Advantages from './components/Advantages/Advantages.jsx';
import Questions from './components/Questions/Questions.jsx';
import Footer from './components/Footer/Footer.jsx';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Advantages />
                <Questions />
                <Footer />
            </>
        );
    }
}
export default App;
