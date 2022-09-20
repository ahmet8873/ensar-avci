import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import {Container} from 'react-bootstrap'
import { Routes,Route } from "react-router-dom";

import Ucuncu from "./components/Ucuncu";
import Galery from "./components/Galery";
import Annem from "./components/Annem";
import Ogretmen from "./components/Ogretmen";
import Yemek from "./components/Yemek";
import Projelerim from "./components/Projelerim";
import Hacivat from "./components/Hacivat";
import Nasreddin from "./components/Nasreddin";
import Oyunlar from "./components/Oyunlar";
import Kitap from "./components/Kitap";
import Kitap2 from "./components/Kitap2";
import Kitap3 from "./components/Kitap3";
import Kitap4 from './components/Kitap4'
import Kitap5 from './components/Kitap5'
import Kitap6 from './components/Kitap6'
import Kitap7 from './components/Kitap7'
import KitapButtons from "./components/KitapButtons";
import Son from "./components/Son";
function App() {
  return (
    <>
      <Container style={{backgroundColor:'#b0ddf4'}}>
        <NavbarComponent></NavbarComponent>
       

        <About></About>
        <Home></Home>
        <Ucuncu></Ucuncu>
        <Galery></Galery>
        <Annem></Annem>
        <Ogretmen></Ogretmen>
        <Yemek></Yemek>
        <Projelerim></Projelerim>
        <Hacivat></Hacivat>
        <Nasreddin></Nasreddin>
        <Oyunlar></Oyunlar>
       
        
        <Routes>

        <Route path="/" element={<Kitap />} />
        <Route path="/2" element={<Kitap2 />} />
        <Route path="/3" element={<Kitap3 />} />
        <Route path="/4" element={<Kitap4/>} />
        <Route path="/5" element={<Kitap5 />} />
        <Route path="/6" element={<Kitap6 />} />
        <Route path="/7" element={<Kitap7 />} />
        </Routes>
         
         <KitapButtons></KitapButtons>
         <Son></Son>
       
       
      </Container>
    </>
  );
}

export default App;
