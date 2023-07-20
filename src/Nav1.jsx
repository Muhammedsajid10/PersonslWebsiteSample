import React from 'react'
import Nav from 'react-bootstrap/Nav';


function Nav1() {
    return (
        <div className='container-fluid' style={{position:"absolute",top:"2rem"}}>
            
                


           
                <Nav defaultActiveKey="/home" className="flex-column primary-menu navbar navbar-expand-lg navbar-dark  border-bottom-0" style={{ width: "12rem", height: "29rem", padding: "2rem", position: "fixed", background: "black",zIndex:"4"}}>
                    <Nav.Link href="/home" style={{ color: "white" }}>Home</Nav.Link>
                    <Nav.Link eventKey="link-1" style={{ color: "white" }}>About Me</Nav.Link>
                    <Nav.Link eventKey="link-2" style={{ color: "white" }}>What I Do</Nav.Link>
                    <Nav.Link eventKey="link-3" style={{ color: "white" }}>Resume</Nav.Link>
                    <Nav.Link eventKey="link-4" style={{ color: "white" }}>Contact</Nav.Link>
                </Nav>
            
        </div>
    )
}

export default Nav1