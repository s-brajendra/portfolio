// import React, { useState, useEffect } from "react";

// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { AiOutlineDownload } from "react-icons/ai";

// import Particle from '../components/Particle'
// import pdf from "../assets/sajib.pdf"

// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const resumeLink = `https://raw.githubusercontent.com/19sajib/portfolio/main/src/assets/sajib.pdf`


// const Resume = () => {
  // <h1>resume</h1>
  // const [width, setWidth] = useState(1200);


  // useEffect(() => {
    
  //   setWidth(window.innerWidth);
  // }, []);

  // return (
  //   <h1> resume </h1>
  //   // <div>
  //   //   <Container fluid className="resume-section">
  //   //     <Particle />
  //   //     <Row style={{ justifyContent: "center", position: "relative" }}>
  //   //       <Button
  //   //         variant="primary"
  //   //         href={pdf}
  //   //         target="_blank"
  //   //         style={{ maxWidth: "250px" }}
  //   //       >
  //   //         <AiOutlineDownload />
  //   //         &nbsp;Download Resume
  //   //       </Button>
  //   //     </Row>

  //   //     <Row className="resume">
  //   //       <Document file={resumeLink} className="d-flex justify-content-center">
  //   //         <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
  //   //       </Document>
  //   //     </Row>

  //   //     <Row style={{ justifyContent: "center", position: "relative" }}>
  //   //       <Button
  //   //         variant="primary"
  //   //         href={pdf}
  //   //         target="_blank"
  //   //         style={{ maxWidth: "250px" }}
  //   //       >
  //   //         <AiOutlineDownload />
  //   //         &nbsp;Download Resume
  //   //       </Button>
  //   //     </Row>
  //   //   </Container>
  //   // </div>
  // )
// }

// export default Resume


import React from 'react'
import { Container,Row,Col} from "react-bootstrap";
// import Particle from '../components/Particle';
// import ContactForm from '../components/Contact/Contact';
// import Social from '../components/Contact/Social';



const Resume = () => {
  return (

    <Container style={{height: "100vh"}} fluid className="home-about-section" id="about">
      <Container>

      <Row>
    <Col  md={12} className="home-about-social">

      <br />
      <br />
      <br />
      
      <h3>Under-Developement</h3>

    </Col>
  </Row>

      </Container>
    </Container>



  
  )
}

export default Resume