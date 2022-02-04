import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Cv from "./components/cv/Cv"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import "./app.scss"
import React from "react";
import Menu from "./components/menu/Menu";




function App() {
 
  return (
    <div className="app">
       <Topbar/>
       <Menu />
       <div className="sections">
         <Intro/>
         <About/>
         <Cv/>
         <Skills/>
         <Contact/>
       </div>
    </div>
  );
}

export default App;

