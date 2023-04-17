import './App.css';
import {Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './components/Display';
import Create from './components/Create';
import Details from './components/Details';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Song Bird</h1>
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/create' element={<Create />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
