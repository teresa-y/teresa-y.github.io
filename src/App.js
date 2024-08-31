import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Play from './pages/Play';
import About from './pages/About';

import CMUIFF from './pages/projects/CMUIFF';
import Market2U from './pages/projects/Market2U';
import Vagary from './pages/projects/Vagary';
import Toby from './pages/projects/Toby';
import Maobi from './pages/projects/Maobi';
import Heuristicats from './pages/projects/Heuristicats';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-YXZB7R7KK2');

  return (
    <>
      <Router basename="/">
        <Navbar />
            <Routes>
                <Route path = '/' element={<Home/>} />
                <Route path = '/play' element={<Play/>} />
                <Route path = '/about' element={<About/>} />

                <Route path = '/cmuiff' element={<CMUIFF/>} />
                <Route path = '/maobi' element={<Maobi/>} />
                <Route path = '/market2u' element={<Market2U/>} />
                <Route path = '/vagary' element={<Vagary/>} />
                <Route path = '/toby' element={<Toby/>} />
                <Route path = '/heuristicats' element={<Heuristicats/>} />

            </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
