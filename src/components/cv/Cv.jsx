import "./cv.scss"
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import pdfFile from "./CV-2022.pdf";


const Cv = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="cv" id="cv">
      <div className="box">
        <div className="container1">
          <div className="item">
            <div className="desc1" data-aos="fade-down">
              <p>
              I am a frontend developer with a background in graphic design who enjoys working both in teams and independently. For the last years, my focus has shifted from graphic design to web development, which has been fun and exciting. I like working with computer structures as well as visual expressions and always strive to find an intuitive functionality.
              </p>
            </div> 
            <div className="desc2" data-aos="fade-left">
              <p className="title" >Goals</p>
            </div>
            <div className="desc3" data-aos="fade-right">
              <p>
               To always develop, to become wiser and to never stop being curious.
              </p>
            </div>
            <div className="desc4" data-aos="fade-left">
                <a href={pdfFile} target="_blank" rel="noreferrer">Download CV as PDF</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cv