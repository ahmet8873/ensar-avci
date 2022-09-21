import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import ReactPlayer from 'react-player'

const Hacivat = () => {
  return (
    <div id='hacivat' style={{marginTop:'3rem', height:'500px'}}>
    <Row>
      <Col >
      <ReactPlayer controls url='https://www.youtube.com/watch?v=HWik47HRp_g&ab_channel=BE%C5%9EKAZATV'></ReactPlayer>
      </Col>
      <Col >

        <h1 style={{fontFamily:'Cursive', marginTop:'100px'}}> Iste bu da en sevdigim golge oyunlarindan biri..</h1>
      </Col>
    </Row>
  
       

    </div>
  )
}

export default Hacivat