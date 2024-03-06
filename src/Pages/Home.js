import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='bg-black'>
        <Container>
        <Row>
        <Col lg={6} md={5} className='p-5 text-white '>
            <h1>Video Uploader</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla exercitationem iure, consequatur in autem velit praesentium minus nihil, magnam excepturi aspernatur alias necessitatibus amet enim. Itaque voluptatibus rerum atque sequi.</p>
<Link to={'/main'}>
          <button type="button" class="btn btn-outline-danger">Get Started</button>
  
</Link>       
 </Col>
        <Col lg={4}md={4}className='p-5'><img src="https://i.postimg.cc/XvPLk7RX/PNG-unscreen-1.gif" alt="" style={{width:'100%',height:'100%'}} />
        </Col>
        </Row>
        <hr className='text-white' />
        
     <h1 className='text-center text-white'>Features</h1>
         <div className='d-flex justify-content-evenly'>
            <Row className=''>
              <Col className='p-3'>
              <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.postimg.cc/XYshKkj8/1-unscreen.gif" />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
  
  
      <Col className='p-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.postimg.cc/yYPrByZH/3-unscreen.gif" />
        <Card.Body>
          <Card.Title>Catogorise videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
  
        </Col>
  
        <Col className='p-3'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://i.postimg.cc/k4KfHQmL/2-unscreen.gif" />
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card></Col>
      </Row>
         </div> 
        </Container>
    </div>
  )
}

export default Home