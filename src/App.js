import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './screens/home';
import About from './screens/about'
import Navbar from "./screens/Navbar"
import Contact from './screens/contact';
import Project from './screens/project';
import Debate from './screens/debate';
function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
        
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/projects" element={<Project/>}/>
              <Route path="/debate-app" element={<Debate/>}/>
        </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
