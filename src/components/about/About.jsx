import "./about.scss";
import { Typewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



const About = () => {
  useEffect(() => {
    Aos.init({duration: 1000 });
     }, []);

  return (
        <div className="about" id="about">
              <div className="left">
              <div className="imgContainer" data-aos="flip-left" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
                  <img src="./assets/port4.png" height="430px" />
                </div>
              </div>
              <div className="right">
                <div className="wrapper" data-aos="fade-left" >
                      <h2> I am a</h2>
                      <h1>Frontend Developer</h1>
                      <Typewriter
                      words={["based in Stockholm"]}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      />
                      {/* <a href="">GitHub</a>
                      <a href="">Likedin</a> */}
                  </div>
              </div>  

              
        </div>    
  )
}

export default About
