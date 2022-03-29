import "./worklist.scss";
import Works from "../works/Works";
import { work } from "../../data";
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Worklist = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="container2">
       <div className="wl">
        <div className="wl-texts">
            <h1 className="wl-title" data-aos="fade-right">Projects</h1>
            <p className="wl-desc" data-aos="fade-left">
            Here are some previous projects I've done with different technical frameworks and tools. Such as JavaScript, HTML, CSS and React. 
            </p>
        </div>
        <div className="wl-list" data-aos="fade-right">
          {work.map((item) => (
            <Works key={item.id} img={item.img} link={item.link} title={item.title} undertitle={item.undertitle} description={item.description}/>
          ))}
        </div>
      </div>
    </div>
 
  );
};


export default Worklist;