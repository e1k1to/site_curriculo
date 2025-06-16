import '../assets/global.css'
import foto from '../assets/foto.webp'
import { GlobalHeader } from '../Pages/Header.tsx'

export function Home() {
    return (
        <>
        <GlobalHeader/>
        <div className="container">
            <div className="dv-apresentacao">
                <div className="dv-foto">
                    <img src={foto} className="foto-eu"/>
                </div>
                <div className="dv-desc">
                    <div className="sobre-mim">
                    <p className="sobre-mim-titulo">
                    Oii, eu sou o <strong>Eiki</strong>!
                    </p>
                    <p>
                    Sou formado em Ciência da Computação pela <strong>Universidade Presbiteriana Mackenzie</strong>, desde dezembro de 2024! 
                    </p>
                        <div className="sobre-mim-2">
                            <p>
                                Tendo <strong><a className="sobre-mim-link" href="https://github.com/e1k1to">experiência</a></strong> com diversas linguagens de programação,</p>
                                <p>
                                Estou em busca de vagas Júnior na área de Tecnologia de Informação, preferencialmente trabalhando com programação.
                                
                            </p>
                        </div>
                    </div>
                    <img src={foto} className="foto-eu-mobile"/>
                    <div className="sobre-mim-2-mobile">
                        <p>
                            Tendo <strong><a className="sobre-mim-link" href="https://github.com/e1k1to">experiência</a></strong> com diversas linguagens de programação,</p>
                            <p>
                            Estou em busca de vagas Júnior na área de Tecnologia de Informação, preferencialmente trabalhando com programação.
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className="dv-skills">
                <h2 className="titulo-skills"> Habilidades Técnicas </h2>
                <div className="skills">
                    <p>
                    <strong> Linguagens de programação: </strong>
                    <ul>
                        <li> Python Intermediário</li>
                        <li> HTML/CSS Intermediário </li>
                        <li> JavaScript Básico </li>
                        <li> Java Básico </li>
                        <li> C# Básico </li>
                        <li> SQL Básico </li>
                    </ul>
                    </p>
                </div>
                <div className="skills-2">
                    <p>
                    <strong> Softwares: </strong>
                    <ul>
                        <li> GitHub Intermediário</li>
                        <li> Linux Intermediário</li>
                        <li> Windows Intermediário</li>
                        <li> Word Intermediário</li>
                        <li> Excel Intermediário</li>
                        <li> Powerpoint Básico</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
