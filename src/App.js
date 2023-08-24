import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Play from './pages/Play';
import About from './pages/About';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router basename="/">
        <Navbar />
            <Routes>
                <Route path = '/' element={<Home/>} />
                <Route path = '/play' element={<Play/>} />
                <Route path = '/about' element={<About/>} />
            </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
