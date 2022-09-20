import React from 'react'
import { Row,Col } from 'react-bootstrap'

const Oyunlar = () => {
  return (
    <div id='oyunlar' style={{marginTop:'3rem', height:'600px'}}>
        <h1 style={{fontFamily:'Cursive', textAlign:'center'}}>OYUN OYNAMAK ICIN TIKLA </h1>

        <Row style={{marginTop:'3rem'}} >

        <Col xs='4'>
          <a href="https://www.trtcocuk.net.tr/oyunlar/ege-ile-gaga-bulmaca">
    <img  style={{height:'200px' ,borderRadius:'50%'}} src="./Screenshot 2022-09-20 at 01.18.53.png" alt="" />
</a>  
        </Col>
        <Col xs='4'>
        <a href="https://www.trtcocuk.net.tr/oyunlar/rafadan-tayfa-mahalle-meselesi">
    <img style={{height:'200px',borderRadius:'50%'}} src="./Screenshot 2022-09-20 at 01.23.26.png" alt="" />
</a>  
        </Col>
        <Col xs='4'>
        <a href="https://www.trtcocuk.net.tr/oyunlar/rafadan-tayfa-tornet">
    <img style={{height:'200px',borderRadius:'50%'}} src="./Screenshot 2022-09-20 at 01.23.44.png" alt="" />
</a> 

</Col>
 
 
 </Row>

 <Row style={{marginTop:'3rem'}}>
     
        <Col xs='4'>
        <a href="https://www.trtcocuk.net.tr/oyunlar/zorlu-yaris">
    <img style={{height:'200px',borderRadius:'50%'}} src="./Screenshot 2022-09-20 at 01.23.57.png" alt="" />
</a>  
        </Col>
        <Col xs='4'>
        <a href="https://www.trtcocuk.net.tr/oyunlar/hayri-uzayda">
    <img style={{height:'200px',borderRadius:'50%'}} src="./Screenshot 2022-09-20 at 01.24.10.png" alt="" />
</a>  
        </Col>
        <Col xs='4'>
        <a href="https://www.trtcocuk.net.tr/oyunlar/tel-ali">
    <img style={{height:'200px',borderRadius:'50%'}} src="./Screenshot 2022-09-20 at 01.37.08.png" alt="" />
</a>  
        </Col>
        
 </Row>
       

    
    </div>
  )
}

export default Oyunlar