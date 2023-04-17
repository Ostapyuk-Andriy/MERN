import Card from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <Card firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <Card firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <Card firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
