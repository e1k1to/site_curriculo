import '../assets/header.css'
import '../assets/global.css'
import logo from '../assets/logo.png'
import { useState } from "react";

export function GlobalHeader() {

    const [isAberto, setIsAberto] = useState(false);

    const toggleMenu = () => {
        setIsAberto(!isAberto)
    }

    return (
            <header>
            <div class="container">
            <div id="logo">
            <a href="#">
            <img src={logo} alt="Logo do site"/>
            </a>
            </div>
            <nav class={` ${isAberto ? "is-open" : ""} `}>
            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#/projetos"> Projetos </a></li>
                <li><a href="#"> Contato </a></li>
            </ul>
            </nav>
            <a class='burge' onClick={toggleMenu}>&#9776;</a>
            </div>
            </header>
    )
}
