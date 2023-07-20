import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact2() {
    return (
      <div>
        <Form  style={{padding:"7rem",background:"black",color:"white"}}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="fw-bold">Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" className="rounded" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className="rounded" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicMessage">
           
            <Form.Control as="textarea" rows={3} placeholder="Tell us more about your needs..." className="rounded" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
  
          <div className="d-grid">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        </Form>
      </div>
    );
  }
export default Contact2