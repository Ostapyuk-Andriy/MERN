import First from './components/First';
import './App.css';

function App() {
  return (
    <div className="App">
      <First firstName="Ruben" lastName="Ocasio" favNum={25} favColor="Black" favGame="Overwatch">
        <h1>Instructor Class</h1>
      </First>
      <First firstName="Tuck" lastName="Chan" favNum={4} favColor="Green" favGame="Warcraft 3"/>
      <First firstName="Stephanie" lastName="Grasso" favNum={11} favColor="Purple" favGame="Stardew Valley"/>
      <First firstName="Andriy" lastName="Ostapyuk" favNum={9} favColor="Black" favGame="Elden Ring"/>
      <First firstName="Nima" lastName="Bazofti" favNum={10} favColor="Blue" favGame="Halo"/>
      <First firstName="Balakimwe" lastName="Farara" favNum={13} favColor="White" favGame="Domino"/>
      <First firstName = "Emmanuel" lastName = "Denis" favNum = {33} favColor = "Blue" favGame = "MGSV"/>
      <First firstName="Andres" lastName="Avalos" favNum={3} favColor="Purple" favGame="Guilty Gear"/>
      
    </div>
  );
}

export default App;
