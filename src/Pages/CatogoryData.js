import React, { useEffect, useState } from "react";
import Videocard from "../Components/Videocard";
import Home from "./Home";
import { useParams } from "react-router-dom";
import { delCatDataApi, deleteCatoApi, getCatoApi } from "../apiService/allApi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { X } from "feather-icons-react/build/IconComponents";

function CatogoryData() {
  const { id } = useParams();
  const [catData, setCatData] = useState([]);

  const catoData = async () => {
    const result = await getCatoApi();
    const data = result?.data?.filter((i) => i.id == id);
    setCatData(data);
  };

  useEffect(() => {
    catoData();
  }, [id]);
  const deleteCatoData=async(e,id)=>{
    // e.preventDefault()
  //  console.log(catData.map(i=>i.videos)[0].find(j=>j.id))
   await delCatDataApi(id)
  }
  deleteCatoData()

  return (
    <div>
      <Container>
        {catData.map((i) => (
          <div>
            <h1>{i.title}</h1>
              <Row>
                {i.videos.map(j =>(
                <Col lg={3} className="d-flex justify-content-eventualy">
                <Card style={{ width: '18rem' }} className="">
                <Card.Img variant="top" src={j.coverImg} style={{height:'255px'}} />
                <Card.Body>
                  <Row className="">
                    <Col lg={10}>
                    <h5 className="text-center p-1">{j.title}</h5>
                    </Col>
                    <Col lg={2}>
                    <X onClick={(e)=>deleteCatoData(e,j.id)} size='35' className=" p-1"></X>
  
                    </Col>
                  </Row>
  
                 </Card.Body>
              </Card>
                </Col>
              ))}
              </Row>
              
          </div>
        ))}
      </Container>
    </div>
  );
}

export default CatogoryData;
