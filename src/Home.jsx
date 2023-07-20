// import React from 'react'

// function Home() {
//     return (

//         <div>
//             <div className="container-fluid" >
//                 <div className="row position-relative">

//                     <div className='position-absolute'><img style={{ height: "32rem", width: "76rem" }} src="https://harnishdesign.net/demo/react/simone/demo/images/intro-bg.jpg" alt="" /></div>
//                     <div className="col-md-12  text-center text-light bg-dark w-100  opacity-50 blur-image" style={{ height: "auto", padding: "12rem", position: "relative" }}>
//                         <h5>Welocme</h5>
//                         <h1>I'm a Web Developer</h1>
//                         <h5>based in futura lab's , calicut</h5>
//                     </div>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Home



import React from 'react';
import './Home.css'

function Home() {
  return (
    <div>
      <div className="hero-section">
        <img
          className="hero-image"
          src="https://harnishdesign.net/demo/react/simone/demo/images/intro-bg.jpg"
          alt="Hero Background"
        />
        <div className="hero-content text-center">
          <h5 style={{fontSize:'2rem'}}>Welcome</h5>
          <h1 style={{color:"#e4c0c0",fontSize:'1.5rem',width:'103%'}}>I'm a Web Developer</h1>
          <h5>based in Futura Lab's, Calicut</h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
