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
            <h1>Contact me.</h1>
          </div>
          <div className="contact-text" data-aos="fade-left">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam quis non id. Vero aliquid magnam <b>mollitia</b> similique in architecto qui, inventore consequuntur nisi hic veniam, quos, laboriosam non dolorem?</p>
          </div>
          <div className="social"data-aos="fade-left">
            <a href=""><FaGithub/></a>
            <a href=""><FaInstagram/></a>
            <a href=""><FaLinkedin/></a>
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
            <input type="text" placeholder="Email" name="unser_email"/>
            <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit" value="send">Send</button>
          </form>
        </div>
      </div>{!email ? "" : alert("Thanks for getting in touch with me!")}
    </div>

  )
}

export default Contact