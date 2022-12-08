import logo from './logo.svg';
import './App.css';
import {Header} from "./Header";
import Card from "./Card";
import Data from "./Data";

function App() {
    const cardElement = Data.map(card => {
        return <Card
            item={card}
            />
    })
  return (
    <div className="App">
      <Header />
      {cardElement}
    </div>
  );
}

export default App;
