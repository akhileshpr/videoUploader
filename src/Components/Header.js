import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-primary" style={{width:'100%',height:'100%'}}>
      <Container>
        <Navbar.Brand href="#" className='text-white'><img src="https://i.postimg.cc/0QVxs3NH/player-unscreen.gif" alt="" style={{height:'50px'}} />Video Uploader</Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header