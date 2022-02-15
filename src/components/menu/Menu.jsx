import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  return(
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#about">Intro</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#cv">About</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#worklist">Projects</a>
            </li>
            <li onClick={()=> setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>

  ) 
}
