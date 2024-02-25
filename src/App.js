import "./App.css"
import Navbar from './components/Navbar/Navbar';
import Home from './components/HOOME/Home';
import Me from './components/AboutMe/Me';
import Skills from './components/Skills/Skills';
import Career from './components/Career/Career';
import Pro from './components/Projects/Pro';
import Cont from './components/Contact/Cont';
function App  () {
  return (
      <div className="App">
        <Navbar />
        <Home/> 
        <Me/> 
        <Career/>
        <Skills/>  
        <Pro/>
        <Cont/>
      </div>
  );
};
export default App;
