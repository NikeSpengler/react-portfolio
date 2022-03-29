import "./contact.scss"
import { useEffect, useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const[email, setEmail] = useState(false)
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.
      sendForm(
        'service_czrtuyj', 
        'template_60f9ioq', 
        e.target, 
        'user_6lvljyPRltrXndg1r5pcL'
      )
    .then(
      (result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    setEmail(true)
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <div className="contact-title" data-aos="fade-left">
            <p>Contact me</p>
          </div>
          <div className="contact-text" data-aos="fade-left">
            <p>Don´t hesitate to contact me! I’d love to hear about what you’re working with and find a way to work together.</p>
          </div>
          <div className="social"data-aos="fade-left">
            <a href="https://github.com/NikeSpengler"><FaGithub/></a>
            <a href=""><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/nike-spengler-61ba68130/"><FaLinkedin/></a>
          </div>
          {/* <div className="social">
            <a href=""><FaInstagram/></a>
          </div>
          <div className="social">
            <a href=""><FaLinkedin/></a>
          </div> */}
        </div>

        <div className="contact-right" data-aos="fade-left">
          <form onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name"/>
            <input type="text" placeholder="Email" name="user_email"/>
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            {/* <br /> */}
            <button type="submit" value="send">Send</button>
          </form>
        </div>
      </div>{!email ? "" : alert("Thanks for getting in touch with me!")}
    </div>

  )
}

export default Contact