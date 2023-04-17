import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Register from "./views/Register";
import DisplayUsers from "./views/DisplayUsers";
import Login from "./views/Login";
// import Cookie from "./views/Cookie";
import UserInfo from "./views/UserInfo";
import './App.css';
// import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
        {/* <Route path="/" element={<Cookie />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<DisplayUsers />} />
        <Route path="/userInfo" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
