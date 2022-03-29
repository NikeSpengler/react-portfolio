import "./topbar.scss";

export default function Topbar({menuOpen, setMenuOpen}) {
  return(
    <div className={"topbar " + (menuOpen && "active")}> 
        <div className="wrapper">
          <div className="left">
            <a href="#about" className="logo">NS</a>
          </div>
          <div className="right">
            {/* <div className="itemContainer">
              <li><a href="">About</a></li>
              <li><a href="">Works</a></li>
              <li><a href="">Contact</a></li>
            </div> */}

            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  ) 
}
