import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Cv from "./components/cv/Cv";
import Menu from "./components/menu/Menu";
import "./app.scss"
import {useState} from "react";



function App() { 
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <About/>
        <Cv/>
        <Works/>
        <Contact/>
       </div>
    </div>
  );
}

export default App;
