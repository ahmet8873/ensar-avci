import React from 'react'
import { Row,Col } from 'react-bootstrap'

const Yemek = () => {
  return (
    <div style={{marginTop:'3rem'}}>
         <Row>



  
<Col >
  <h1 style={{fontFamily:'Cursive', marginTop:'100px'}}>Bu Arada Yemek Yemeyi Dee..</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed inventore exercitationem expedita soluta, aut eius pariatur aspernatur quibusdam sapiente, natus ex, dolorum error! Hic, aut! Optio earum maxime voluptatibus officia nam obcaecati a nulla ipsam corporis iusto cumque ea, rerum sint. Laborum adipisci laboriosam dolores, placeat molestias sed aspernatur.</p>
</Col>
<Col >
<img style={{height:'500px', borderRadius:'50%'}} src="./img/IMG-20220917-WA0011.jpg" alt="" />
</Col>

<Col >
<h1 style={{fontFamily:'Cursive', marginTop:'100px'}}>Cooook Severim..</h1>
</Col>

  </Row>
    </div>
  )
}

export default Yemek