import './App.css';
import Header1 from './pages/home/Header1';
import Header from './pages/home/Navbar';
import Side from './pages/home/Side';
import Home from './pages/login/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './pages/login/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header1/>}/>
        <Route path="/login" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
