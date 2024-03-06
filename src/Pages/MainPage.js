import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import Videos from '../Components/Videos'
import Catogories from '../Components/Catogories'
import { Link } from 'react-router-dom'

function MainPage() {
    //state for state lifting
    const[changedata,setChangeData]=useState('')
    return (
        <div className='bg-black text-white'>
            <Row>
                
                <Col lg={8}><h1 className='p-3'>Start Uploading Videos For Free</h1>
                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur illo sapiente esse minima nisi error quia ex quisquam, corrupti alias quibusdam laboriosam, eum perspiciatis architecto quis totam possimus. Mollitia.</p>
<Link to={'/history'} style={{textDecoration:'none'}}>
                    <p className='p-3 fs-5'><i class="fa-regular fa-clock fa-spin fa-spin-reverseb p-2 fa-lg text-danger "></i><a href="" style={{textDecoration:'none',color:'green'}}>Watch History</a></p>
    
</Link>
                <Add udata={setChangeData}></Add></Col>
                <Col lg={4}><img src="https://i.postimg.cc/c48XTFPx/4-unscreen.gif" alt="" style={{width:'50%'}} /></Col>
                
            </Row>

          <Row>
            <Col lg={8} className='p-5'><Videos cdata={changedata}></Videos></Col>
            <Col lg={4} className='p-5'><Catogories></Catogories></Col>
            </Row>
            
        </div>
    )
}

export default MainPage