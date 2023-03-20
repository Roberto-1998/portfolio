import { BrowserRouter as Router } from 'react-router-dom';
import { Hero, Navbar, About, Tech, Experience, Works, Contact, StarsCanvas } from './components';

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-black'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

export default App;
