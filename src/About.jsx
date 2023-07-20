import React from 'react'

function About() {
    return (
        <div className="position-relative bg-dark d-flex" >
            <h2 class="text-24  text-uppercase fw-600 w-100 mb-0  opacity-1 text-center text-size-10px " style={{ fontSize: "6rem", color: "#3a454e", zIndex: "1" }}>About Me</h2>
            <p className='position-absolute' style={{ left: "28rem", top: "2rem", fontSize: "3rem", fontWeight: "bold", color: "white", zIndex: "1" }}>Know Me More</p>

        </div>
    )
}

export default About