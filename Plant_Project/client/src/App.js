import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Create from "./components/Create";
import Dashboard from "./components/Dashboard";
import Edit from "./components/Edit";
import OnePlant from "./components/OnePlant";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Edit />} />
        <Route path="/plant/:id" element={<OnePlant />}/>
      </Routes>
    </div>
  );
}

export default App;
