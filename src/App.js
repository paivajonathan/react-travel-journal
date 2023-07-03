import './App.css';

import Header from './components/Header';
import Card from './components/Card';

import Data from './data/Data';

export default function App() {
    const cards = Data.map(item => 
        <Card data={item} />
    );

    return (
        <div className="App">
            <Header />
            <div className="div-cards">
                {cards}
            </div>
        </div>
    );
}