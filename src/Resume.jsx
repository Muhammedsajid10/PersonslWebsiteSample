import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  return (
    <div className='bg-dark'>
      <h2 className="text-24 text-uppercase fw-600 w-100 mb-0 opacity-1 text-center text-size-10px" style={{ fontSize: "6rem", color: "#3a454e", zIndex: "1" }}>Summary</h2>
      <p className='position-absolute' style={{ left: "31rem", top: "112rem", fontSize: "3rem", fontWeight: "bold", color: "white", zIndex: "1" }}>Resume</p>

      <Row className='p-4'>
        <Col  className="p-5 m-4"  style={{ display:"flex",flexDirection: "column", justifyContent: "space-between" }}>
          <h3 className="text-6 fw-600 mb-4 text-white">My Education</h3>

          <Card className='bg-dark text-light m-3' style={{ width: '24rem', borderRadius: "10pxpx", borderColor: "white" }}>
            <Card.Body>
              <p className="badge bg-primary text-2 fw-400">2016 - 2017</p>
              <Card.Title>SSLC</Card.Title>
              <p className='text-primary'>kerala syllabus </p>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='bg-dark text-light m-3' style={{ width: '24rem', borderRadius: "10pxpx", borderColor: "white" }}>
            <Card.Body>
              <p className="badge bg-primary text-2 fw-400">2017 - 2019</p>
              <Card.Title>Computer Science</Card.Title>
              <p className='text-primary'>kerala syllabus</p>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='bg-dark text-light m-3' style={{ width: '24rem', borderRadius: "10pxpx", borderColor: "white" }}>
            <Card.Body>
              <p className="badge bg-primary text-2 fw-400">2019 - 2022</p>
              <Card.Title>Diploma in Computer Eng</Card.Title>
              <p className='text-primary'>Technical Board</p>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          


        </Col>

        <Col  className="p-5 m-4"  style={{ display:"flex",flexDirection: "column", justifyContent: "space-between" }}>
          <h3 className="text-6 fw-600 mb-4 text-white">My Experience</h3>

          <Card className='bg-dark text-light m-3' style={{ width: '24rem', borderRadius: "10pxpx", borderColor: "white" }}>
            <Card.Body>
              <p className="badge bg-primary text-2 fw-400">2022 - 2023</p>
              <Card.Title>Ethical Hacking</Card.Title>
              <p className='text-primary'>Brototype</p>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='bg-dark text-light m-3' style={{ width: '24rem', borderRadius: "10pxpx", borderColor: "white" }}>
            <Card.Body>
              <p className="badge bg-primary text-2 fw-400">2022 - 2023</p>
              <Card.Title>Mern Stack</Card.Title>
              <p className='text-primary'>Futura Lab</p>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='bg-dark text-light m-3' style={{ width: '24rem', borderRadius: "10pxpx", borderColor: "white" }}>
            <Card.Body>
              <p className="badge bg-primary text-2 fw-400">2000 - 2004</p>
              <Card.Title>Software Engineer</Card.Title>
              <p className='text-primary'>Company Name</p>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </div>
  )
}

export default Resume;
