import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

  

const NavbarComponent = () => {
  return (
    
        <div>
        <Navbar style={{backgroundColor:'#071b6b' ,height:'5rem'}} variant='dark' expand="lg">
      <Container>
        <Navbar.Brand ><img style={{height:'5rem'}} src="./Screenshot 2022-09-19 at 23.39.20.png" alt="" />Ensar Avci</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto'>
          
            <Nav.Link href="#home">Hakkimda</Nav.Link>
            <Nav.Link href='#family'> Ailem</Nav.Link>
            <Nav.Link href='#about'> Fotograf Galerim</Nav.Link>
             <Nav.Link href='#proje'> Projelerim</Nav.Link>
             <Nav.Link href='#hacivat'> Golge Oyunu</Nav.Link>
             <Nav.Link href='#nasreddin'> Masal</Nav.Link>
             <Nav.Link href='#oyunlar'> Oyunlar</Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
   
   
  
    
  
  )
}

export default NavbarComponent