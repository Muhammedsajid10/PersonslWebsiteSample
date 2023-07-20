import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Resume2() {
    const n1 = 60;
    const n2 = 80;
    const n3 = 45;
    const n4 = 80;
    return (
        <div className='container-fluid bg-dark text-light p-4'>
            <h3 style={{paddingLeft:"18rem"}}>My Skill</h3>
            <div style={{paddingLeft:"18rem"}}>
                <div>
                    <p>Web Design</p>
                    <ProgressBar animated now={n1} label={`${n1}%`} style={{ width: "33rem" }} />
                </div>

                <div>
                    <p>HTML/CSS</p>
                    <ProgressBar animated now={n2} label={`${n2}%`} style={{ width: "33rem" }} />
                </div>

                <div>
                    <p>JavaScript</p>
                    <ProgressBar animated now={n3} label={`${n3}%`} style={{ width: "33rem" }} />
                </div>

                <div>
                    <p>Bootstrap</p>
                    <ProgressBar animated now={n4} label={`${n4}%`} style={{ width: "33rem" }} />
                </div>

                
            </div>

        </div>
    )
}

export default Resume2