import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Services() {
    return (
        <div className='container-fluid' style={{ background: "#090808" }}>
            <div className="row">
                <h2 class="text-24  text-uppercase fw-600 w-100 mb-0  opacity-1 text-center text-size-10px " style={{ fontSize: "6rem", color: "#3a454e", zIndex: "1" }}>Services</h2>
                <p className='position-absolute' style={{ left: "30rem", top: "77rem", fontSize: "3rem", fontWeight: "bold", color: "white", zIndex: "1" }}>What I Do</p>
                <div className="col-md-12 d-flex p-5 " style={{ justifyContent: "space-between" }}>

                    <Card className='bg-dark text-light' style={{ width: '14rem', height: "22rem" }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Web designer</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>

                    <Card className='bg-dark text-light' style={{ width: '14rem', height: "22rem" }}>
                        <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1661764393655-1dbffee8c0ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFja2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Ethical hacking</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>

                    <Card className='bg-dark text-light' style={{ width: '14rem', height: "22rem" }}>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Game development</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

                
            </div>
        </div>
    )
}

export default Services