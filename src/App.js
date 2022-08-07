import { HashRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import PokedexInfo from "./components/PokedexInfo";
import "./index.css";
import Help from './pages/Help';
import Contacts from './pages/Contacts';
import Navbar from './components/NAVBAR/Navbar';
import Footer from './components/FOOTER/Footer';

function App() {
  return (
    <HashRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<PokedexInfo />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
