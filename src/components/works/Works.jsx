import "./works.scss";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Works = ({img, link, title, text}) => {
  useEffect(() => {
    Aos.init({duration: 1000 });
     }, []);
     
  return (
    <div className="works" id="works">
       <div className="w">
          <div className="w-card">
            <h3 id={title} className="card-title"></h3>
            <p id={text} className="card-text"></p> 
          </div>
          <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="w-img" />
          </a>
       </div>
    </div>
  );
};


export default Works;
