import "./about.scss"

export default function About() {
  return (
        <div className="about" id="about">
            <div className="left">
              <p>I am a Frontend Developer,</p>
              <p>based in Stockholm</p><br />
              <span className="github">gitHub</span> <br />
              <span className="linkedin">Linkedin</span><br />
              <span className="email">spengler.nike@gmail.com</span><br />
            </div>
            <div className="right">
              <img src="" alt="" />
            </div>
            <div className="taxt-about">
              <p>I’m a Stockholm based frontend developer with graphic design experience, often from working in close collaboration with clients. The last few years I’ve shifted from graphic design towards web development which I’ve become rather passionate about. I’m drawn to working with data structures, developing playful visual aesthetics and creating intuitive functionality.</p>
            </div>
        </div>
  )
}
