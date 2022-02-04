import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss"



function App() {
  return (
    <div className="app">
     <Topbar/>
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
