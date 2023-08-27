import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Play from './pages/Play';
import About from './pages/About';

import Market2U from './pages/projects/Market2U';
import Vagary from './pages/projects/Vagary';
import Toby from './pages/projects/Toby';
import CookieBanner from './pages/projects/CookieBanner';
import Heuristicats from './pages/projects/Heuristicats';


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

                <Route path = '/market2u' element={<Market2U/>} />
                <Route path = '/vagary' element={<Vagary/>} />
                <Route path = '/toby' element={<Toby/>} />
                <Route path = '/cookiebanner' element={<CookieBanner/>} />
                <Route path = '/heuristicats' element={<Heuristicats/>} />

            </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
