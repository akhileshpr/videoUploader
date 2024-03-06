import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import './history.css';
import { delHistoryApi, deleteCatoApi, getHistoryApi } from '../apiService/allApi';
import { X } from 'feather-icons-react/build/IconComponents';

function History() {

  const[history,setHistory]=useState([])

  const getHistory=async()=>{
      const result=await getHistoryApi()
      setHistory(result.data);
  }
  const deleteCatogory=async(e,id)=>{
    e.preventDefault()
   await delHistoryApi(id)
   getHistory()
  }
useState(()=>{
  getHistory()
},[])
// console.log(history);
  return (
    <div className='bg-black text-white'>
        <h1>Watch History</h1>
    

        <Table striped bordered hover variant='dark' className='container w-75 my-3'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Time</th>
          <th>Youtube Link</th>
          <th></th>
        </tr>
      </thead>
      <tbody>

        {
          history?.length>0?(
            history?.map((i,index)=>(
              <tr>
          <td>{index +1}</td>
          <td>{i.title}</td>
          <td>{i.time}</td>
          <td>{i.utubeUrl}</td>
          <td><X size={55} onClick={(e)=>deleteCatogory(e,i.id)} className='btn p-2'></X></td>
        </tr>
        
            ))
          )

          :<h1>no data</h1>
        }
        
       
       
      </tbody>
    </Table>

    </div>
  )
}

export default History