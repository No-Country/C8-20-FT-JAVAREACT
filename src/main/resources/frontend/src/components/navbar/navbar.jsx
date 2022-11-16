import React, {useState} from "react";
import "./navbar.css"
import Title from "../title/title.jsx"

const Navbar = () => {

    // to change burger classes
    const [burgerClass, setBurgerClass] = useState("burgerBar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burgerBar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burgerBar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%'}}>
            
            <nav>
                <div className="burgerMenu" onClick={updateMenu}>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                </div>
                <Title/>
            </nav>
            <div className={menuClass}>
                <ul style={{marginTop: "4em", padding:"0"}}>
                    <li className="liOptionMenu"><span className="optionMenu">Inicio</span></li>
                    <li className="liOptionMenu"><span className="optionMenu">Menu</span></li>
                    <li className="liOptionMenu"><span className="optionMenu">Contacto</span></li>
                    <li className="liOptionMenu"><span className="optionMenu">Sobre nosotros</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar