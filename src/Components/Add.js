import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi, getCatoApi } from '../apiService/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({udata}) {
  
  const[data,setData]=useState(
    {
      title:"",
      coverImg:"",
      utubeUrl:"",
      id:""
    }
  )
  const addData=(e)=>{                //used to update input state
   let {value,name}=e.target
   setData({...data,[name]:value})
  }
  const urlData=(e)=>{
    const {value,name}=e.target
   const urlCode= value.slice(-11,)
  const finalUrl=`https://www.youtube.com/embed/${urlCode}?autoplay=1`
   setData({...data,[name]:finalUrl})
  }
  // console.log(data);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)

    //reset state

    setData({...data,title:"",
    coverImg:"",
    utubeUrl:"",
    id:""})
  }
  const handleShow = () => setShow(true);
  //add video
  const handleAdd=async(e)=>{
    //prevent event
    e.preventDefault()

    //destructure
      
    const {title,coverImg,utubeUrl}=data
    if(!title || !coverImg || !utubeUrl){
      toast.warning('fill all datas..!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });    }
    else{
      const result=await addVideoApi(data)
      // console.log(result);
      if(result.status>=200 && result.status<300){
          udata(result.data)
        toast.success('video added succesfully..!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        handleClose()
      }
  

    }

  }
  return (
    <div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-dark text-white'>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>

          <FloatingLabel
            controlId="floatingInput"
            label="Video Caption"
            className="mb-3"
          >

            <Form.Control type="text" name='title' onChange={(e)=>addData(e)} placeholder='Video Caption'  style={{ border: 'none' }} />
          </FloatingLabel>

          <FloatingLabel
            label="Cover Image URL"
            className="mb-3"
          >
            <Form.Control type="text" name='coverImg' onChange={(e)=>addData(e)} placeholder="Cover Image URL" style={{ border: 'none' }} />

          </FloatingLabel>
          <FloatingLabel
            label="Youtube Video URL"
            className="mb-3"
          >
            <Form.Control type="text" name='utubeUrl' onChange={(e)=>urlData(e)} placeholder="Youtube Video URL" style={{ border: 'none' }} />

          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button className='bg-white text-black' onClick={(e)=>handleAdd(e)}>Add</Button>
        </Modal.Footer>
      </Modal>
      <button onClick={handleShow} type="button" class="btn btn-outline-0 text-danger fs-5">          <i class="fa-solid fa-upload fa-beat-fade p-2 ms-2"></i>
        Upload</button>
        <ToastContainer />
    </div>
  )
}

export default Add