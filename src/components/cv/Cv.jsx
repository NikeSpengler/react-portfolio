import "./cv.scss"
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";


const Cv = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="cv" id="cv">
      <div className="box">
        <div className="container">
          <div className="item">
            <div className="desc1" data-aos="fade-down">
              <p>
                I’m a Stockholm based frontend developer with graphic design experience, often from working in close collaboration with clients. The last few years I’ve shifted from graphic design towards web development which I’ve become rather passionate about. I’m drawn to working with data structures, developing playful visual aesthetics and creating intuitive functionality.
              </p>
            </div> 
            <div className="desc2" data-aos="fade-left">
              <p className="title" >Goals</p>
            </div>
            <div className="desc3" data-aos="fade-right">
              <p>
                What drives me forward is that the industry is constantly evolving, which means that I too can and need to develop. It's both exciting and fun. 
              </p>
            </div>
            <div className="desc4" data-aos="fade-left">
                <a href="">Download my CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cv