import React from 'react';
import CardList from './components/CardList/CardList';
import Form from './components/Form/Form';

function App() {
    return (
        <div className="container">
            <div className="link">
                Тестовые данные предоставлены <a href='https://fakestoreapi.com/' target='blanc'> fakestoreapi.com</a>
            </div>
            <Form />
            <CardList />
        </div>

    );
}

export default App;