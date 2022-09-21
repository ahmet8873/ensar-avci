import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import ReactPlayer from 'react-player'
const Nasreddin = () => {
  return (
    <div id='nasreddin' style={{marginTop:'3rem', height:'500px'}}>

<Row>
      
      <Col xs={4}>

        <h1 style={{fontFamily:'Cursive', marginTop:'100px'}}> Iste bu da en sevdigim masallardan biri..</h1>
      </Col>

      <Col xs={8}>
      <ReactPlayer controls url='https://www.youtube.com/watch?v=wGqUpbLAqX0&ab_channel=DiyanetTV'></ReactPlayer>
      </Col>
    </Row>
    </div>
  )
}

export default Nasreddin