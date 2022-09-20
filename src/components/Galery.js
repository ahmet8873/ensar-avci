import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
const Galery = () => {
  return (
    <div style={{marginTop:'3rem'}}>
        <Row>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/IMG-20220917-WA0025.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/IMG-20220917-WA0016.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./img/IMG-20220917-WA0015.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Galery