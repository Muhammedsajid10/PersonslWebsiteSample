import About from './About';
import About2 from './About2';
import './App.css';
import Contact from './Contact';
import Contact2 from './Contact2';
import Home from './Home';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Resume from './Resume';
import Resume2 from './Resume2';
import Services from './Services';


function App() {
  return (
    <div className="App">
       <Nav2/>
      <Home/>
      
      <About/>
      <About2/>
      <Services/>
      <Resume/>
      <Resume2/>
      <Contact/>
      <Contact2/> 
      
    </div>
  );
}

export default App;
