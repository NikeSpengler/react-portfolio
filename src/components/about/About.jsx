import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const About = () => {
  const textRef = useRef();

  useEffect(() => {
    Aos.init({duration: 1000 });
    }, []);

  useEffect(() => {
    init (textRef.current, {
      showCurser: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["based in Stockholm"],
    });
  }, []);

  return (
        <div className="about" id="about">
              <div className="left">
              <div className="imgContainer" data-aos="flip-left" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" >
                  <img src="./assets/portfoliobild.png" height="430px" />
                </div>
              </div>
              <div className="right">
                <div className="wrapper">
                      <h2> I am a</h2>
                      <h1>Frontend Developer</h1>
                      <h2><span ref={textRef}></span></h2>
                      <br />
                      <br />
                      <br />
                      <br />
                      {/* <a href="">GitHub</a>
                      <a href="">Likedin</a> */}
                  </div>
              </div>  
        </div>   
  )
}
export default About
