import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Home = () => {
  return (
    <Container id='home' style={{marginTop:'2rem'}}>
 
    <Row>
      <Col xs='6'>
        <h2 style={{fontFamily:'Cursive', marginTop:'100px'}}>Sanatsal Faaliyetlere Katilmaktan Cok Hoslanirim</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, necessitatibus tempore? Praesentium dolorum eaque doloremque aspernatur, quam inventore natus exercitationem dolor molestias veritatis tenetur esse. Vero tempore explicabo veniam aliquid, pariatur repudiandae incidunt qui labore adipisci ratione accusamus, laudantium ipsum distinctio eos id asperiores, repellat ullam perspiciatis provident totam! Aut.
      </p>
      </Col>
      
      <Col xs='6'>
      <img style={{height:'480px'}} src="./img/IMG-20220917-WA0018.jpg" alt="" />
      </Col>
    </Row>

    
    
 
    </Container>
   
  )
}

export default Home