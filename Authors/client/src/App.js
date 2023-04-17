import './App.css';
import {Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './components/Display';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/create' element={<Create />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
