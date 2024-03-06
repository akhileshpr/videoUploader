import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideoApi } from '../apiService/allApi'

function Videos({cdata}) {
  const[deleteUpdate,setDeleteUpdate]=useState({})
  const[allVideos,setAllVideos]=useState([])
  const accessAllVideos=async()=>{
 const result= await getVideoApi()
 setAllVideos(result.data)   //store in state
  }
  useEffect(()=>{
        accessAllVideos()
  },[cdata,deleteUpdate])

  // console.log(allVideos);
    return (
        <div>
                          
<Row>
  
             
        {
        allVideos?.length>0?allVideos?.map(
          i=>(<Col lg={4} md={6} className='my-3'><Videocard deleteData={setDeleteUpdate} video={i}></Videocard></Col>
        ))
        :<h1>No Videos...</h1>
        
        }           
  
</Row>
        </div>
    )
}

export default Videos