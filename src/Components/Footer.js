import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='d-flex justify-content-evenly'>
    
        <Row className='w-100' style={{backgroundColor:'brown',color:'white'}}>
        <Col className='p-3 w-100'><h6 className='text-center'>Video Uploader</h6>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente molestiae, voluptatum dolorum fuga </p>
        </Col>
        <Col className='p-3 w-100'><h6 className='text-center'>Links</h6>
        <ul style={{listStyle:'none'}}>
          <li>Landing Page</li>
          <li>Home</li>
          <li>Watch History</li>
        </ul>
        
        </Col>

        <Col className='p-3 w-100'><h6 className='text-center'>Guides</h6>
        <ul style={{listStyle:'none'}}>
          <li>react</li>
          <li>React-Bootstrap</li>
          <li>routing</li>
        </ul>
        
        </Col>
        <Col className='p-3 w-100'><h6 className='text-center'>Contact Us</h6>
        <form action="">
          <input type="text" placeholder='enter name' className='w-100 form-control' />
          <button className='btn btn-danger w-100 mt-2'>Send</button>
          <div className='mt-2'>
          <i class="fa-brands fa-instagram p-2"></i>
          <i class="fa-brands fa-facebook p-2"></i>
          <i class="fa-brands fa-twitter p-2"></i>
          <i class="fa-brands fa-github p-2"></i>
          </div>
        </form>
        </Col>
        </Row>
      
    </div>
  )
}

export default Footer