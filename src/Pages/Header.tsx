import '../assets/cssFiles/global.css'
import '../assets/cssFiles/header.css'
import logo from '../assets/images/logo.png'
import foto from '../assets/images/foto.webp'
import { useState } from "react";

export function GlobalHeader() {

    const [isAberto, setIsAberto] = useState(false);

    const toggleMenu = () => {
        setIsAberto(!isAberto)
    }

    return (
            <header>
            <div className="container">
            <div id="logo">
            <a href="#">
            <img src={logo} alt="Logo do site"/>
            </a>
            </div>
            <nav className={` ${isAberto ? "is-open" : ""} `}>
            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#/projetos"> Projetos </a></li>
                <li><a href="#"> Contato </a></li>
            </ul>
            </nav>
            <a className='burge' onClick={toggleMenu}>&#9776;</a>
            </div>
            </header>
    )
}
