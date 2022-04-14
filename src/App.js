import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import HOme from './Pages/Home/HOme/HOme';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
     <h1>thisapp</h1>
     <Header></Header>
     <Routes>
     <Route path="/" element={<HOme/>} />
     <Route path="about" element={<About />} />
     </Routes>
    </div>
  );
}

export default App;
