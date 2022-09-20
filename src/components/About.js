import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container id='about' style={{ marginTop:'2rem'}}>
    <Row>
     
    

      <Col xs='6'>
      <img style={{height:'500px'}} src="./img/IMG-20220917-WA0004.jpg" alt="" />
      </Col>

        
      <Col  xs='6'>
        <h1 style={{fontFamily:'Cursive', marginTop:'100px'}}>Merhaba Ben Ensar. Bu Da Benim Kisisel Sayfam</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed inventore exercitationem expedita soluta, aut eius pariatur aspernatur quibusdam sapiente, natus ex, dolorum error! Hic, aut! Optio earum maxime voluptatibus officia nam obcaecati a nulla ipsam corporis iusto cumque ea, rerum sint. Laborum adipisci laboriosam dolores, placeat molestias sed aspernatur.</p>
      </Col>
    </Row>
 
    </Container>
  )
}

export default About