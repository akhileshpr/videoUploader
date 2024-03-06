import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, deleteVideoApi } from '../apiService/allApi';
import { format } from 'date-fns';


function Videocard({video,deleteData}) {
  const deleteVideo=async(e,id)=>{
    e.preventDefault()
   const result=await deleteVideoApi(id)
   //delete data
   deleteData(result.data)
  }
    const dragStart=(e,id)=>{
      // console.log("dragging start at"+id);
      e.dataTransfer.setData('cardId',id)   //store dragged data
    }

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)
    // history
    //body data-title,time,image
    const title=video?.title
    const utubeUrl=video?.utubeUrl
    let time=format(new Date(),"dd-MM-yyyy,h:mm a")
    const reqBody={
      title,utubeUrl,time,id:""
    }
   await addHistoryApi(reqBody)
    // console.log(reqBody);
  
  }
  return (
    <div className='d-flex justify-content-evenly'>
        <Card draggable  onDragStart={(e)=>dragStart(e,video?.id)}  className='bg-dark text-white' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='w-100' style={{height:'200px',width:'100%'}} src={video?.coverImg} onClick={handleShow} />
      <Card.Body>
        <Card.Title className='text-center'><h5>{video?.title}</h5> 
        <div className='text-end text-danger'>
        <i onClick={(e)=>deleteVideo(e,video?.id)} class="fa-solid fa-circle-xmark"></i>
        </div>
        </Card.Title>

       
      </Card.Body>
    </Card>

    <Modal centered size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark text-white'>
          <Modal.Title >{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-white'><iframe width="100%"  height="400px" 
        src={video?.utubeUrl} 
        title="WORLD OF ANIMALS IN DOLBY VISION™ | HDR 12K 60FPS (TRUE CINEMATIC)" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
      
      </Modal>
    </div>
  )
}

export default Videocard