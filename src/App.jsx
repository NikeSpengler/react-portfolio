import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cv from "./components/cv/Cv";
import Menu from "./components/menu/Menu";
import "./app.scss"
import {useState} from "react";
import Worklist from "./components/worklist/Worklist";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";





const App = () => { 
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <About/>
        <Cv/>
        <Worklist/>
        <Contact/>
        <Footer/>
       </div>
    </div>
  );
};

export default App;
