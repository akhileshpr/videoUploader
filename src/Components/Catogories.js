import React, { useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCatoApi, deleteCatoApi, getCatoApi, getVideo, updateCatApi } from '../apiService/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import X from 'feather-icons-react/build/IconComponents/X'
import { Link } from 'react-router-dom'

function Catogories() {
    const[catogory,setCatogory]=useState([])  //to store catogory data array
    const getCatogory=async()=>{              //api data
        const result=await getCatoApi()
      setCatogory(result.data);
       }
       useEffect(()=>{
          getCatogory()
       },[])
    //    console.log(catogory);
      

    // const inpCatogory=(e)=>{
    //     let {value,name}=e.target
    //     setCatogoryData({...catogoryData,[name]:value})
    //     console.log(catogoryData);
        

    // }
    const handleAdd=async(e)=>{
        e.preventDefault()
        if(!catogoryData.title){
            toast.warning('fill all datas..!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                }); 
        }
        else{
           const result=await addCatoApi(catogoryData)
        //    console.log(result);
        if(result.status>=200 && result.status<300){
           await getCatogory()
            toast.success('catogory added succesfully..!', {
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
    const [catogoryData,setCatogoryData]=useState({
        title:"",
        id:"",
        videos:[]
    })
    // const catogoryDataf=(e)=>{
    //     let {value,name}=e.target
    //     setCatogoryData({...catogoryData,[name]:value})
    // } function created for user input
    
    console.log(catogoryData);
    const [show, setShow] = useState(false);

    const handleClose = () =>{
        setShow(false)
        setCatogoryData({...catogoryData,title:""})

    } 
    const handleShow = () => setShow(true);

    const handleDelete=async(e,id)=>{
        e.preventDefault()
        await deleteCatoApi(id)
        getCatogory()

    }
    const draggingOver=(e)=>{
        e.preventDefault()
        // console.log('dragging startted');
    }
    const dropped=async(e,id)=>{
        // console.log('droppped'+id);
       const vidId= e.dataTransfer.getData("cardId")
       //console.log(vidId);


       //acces video
      const result= await getVideo(vidId)
      const video=result.data

      //catogory select
      let selectedCat=catogory.find(i=>i.id==id)
          selectedCat.videos.push(video)
    //   console.log(selectedCat);
     await updateCatApi(id,selectedCat)
     console.log('added succesfully...!');
     getCatogory()
    }

    return (
        <div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className='bg-dark text-white' style={{border:'none'}}>
                    <Modal.Title>Add New Catogory</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Catogory name"
                        className="mb-3">
                        <Form.Control onChange={(e)=>setCatogoryData({...catogoryData,["title"]:e.target.value})} type="text" placeholder="catogory name" style={{border:'none'}} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer className='bg-dark text-white'>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={(e)=>handleAdd(e)} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col>
                    <button className='btn btn-danger w-100 mb-3' onClick={handleShow} >Add Catogory</button>
                    {
                        catogory?.length>0?
                        catogory.map(i=>(
                            <Link to={`/cards/${i.id}`} style={{textDecoration:'none'}} className='text-white'>
                                <div droppable onDrop={(e)=>dropped(e,i.id)} onDragOver={(e)=>draggingOver(e)}>
                                    <Row className='border my-3'>
                                        <Col lg={10} className='p-4'>
                                        <h5 className='text-center '>{i.title}</h5>
                                        
                                             <marquee>
                                            <div className='d-flex'> 
                                                    {
                                                        i?.videos.length>0?(i.videos.map(j=>(
            <div>
                                                                <img 
                                                                src={j?.coverImg} alt="" 
                                                                style={{height:"50px"}} 
                                                                className='p-2' 

                                                                />
                
            </div>                                            ))
                                                        ):""
                                                    }
                                            </div>
                                             </marquee>
                                        
                                        </Col>
                                        <Col lg={2} className='text-end text-danger'>
                                        <X onClick={(e)=>handleDelete(e,i?.id)} size="55" className="btn p-2"></X>
                                        
                                        </Col>
                                    </Row>
                                </div>
                            </Link>

                        ))
                        :<p>No Videos Yet</p>
                    }
                    
                </Col>




            </Row>
            <ToastContainer />
        </div>
    )
}

export default Catogories