import './App.css';
import {Router} from '@reach/router';
import Main from '../src/views/Main.js';
import Endless from '../src/views/Endless.js';
import Contact from '../src/views/Contact.js';
import Projects from '../src/views/Projects.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <Endless path='/endless'/>
        <Contact path='/contact'/>
        <Projects path='/projects'/>
      </Router>
    </div>
  );
}

export default App;
