import "./works.scss";
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

const Works = ({img, link, title, undertitle, description}) => {
  useEffect(() => {
    Aos.init({duration: 1000 });
     }, []);
     
  return (
    <div className="works" id="works">
       <div className="w">
          <div className="w-card">
            <p className="card-undertitle">{undertitle}</p> 
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p> 
          </div>
          <a href={link} target="_blank" rel="noreferrer" title="Go to project">
          <img src={img} alt="" className="w-img" />
          </a>
       </div>
    </div>
  );
};


export default Works;
