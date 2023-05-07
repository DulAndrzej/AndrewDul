import { BrowserRouter } from 'react-router-dom';


import Examplecube from './components/Examplecube';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar.js'



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Examplecube/>
        </div>
          <About />

        <div>
          <Contact />
        </div>
      </div>
      
    
    
    </BrowserRouter>
  );
}

export default App; 
