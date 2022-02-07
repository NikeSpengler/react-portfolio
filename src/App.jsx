import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss"
import {useState} from "react";



function App() { 
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <About/>
        <Works/>
        <Contact/>
        <Footer/>
       </div>
    </div>
  );
}

export default App;
