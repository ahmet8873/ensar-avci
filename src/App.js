import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import NavbarComponent from "./components/NavbarComponent";
import {Container} from 'react-bootstrap'


import Ucuncu from "./components/Ucuncu";
import Galery from "./components/Galery";
import Annem from "./components/Annem";
import Ogretmen from "./components/Ogretmen";
import Yemek from "./components/Yemek";
import Projelerim from "./components/Projelerim";
import Hacivat from "./components/Hacivat";
import Nasreddin from "./components/Nasreddin";
import Oyunlar from "./components/Oyunlar";

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
       
        
       
         <Son></Son>
       
       
      </Container>
    </>
  );
}

export default App;
