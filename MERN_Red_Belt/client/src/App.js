import './App.css';
import {Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
