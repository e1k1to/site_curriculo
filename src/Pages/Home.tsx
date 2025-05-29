import '../assets/global.css'
import foto from '../assets/foto.webp'
import { GlobalHeader } from '../Pages/Header.tsx'

export function Home() {
    return (
        <>
        <GlobalHeader/>
        <div class="container">
            <div class="dv-apresentacao">
                <div class="dv-foto">
                    <img src={foto} class="foto-eu"/>
                </div>
                <div class="dv-desc">
                    <div class="sobre-mim">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                        <div class="sobre-mim-2">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dv-skills">
                <h2 class="titulo-skills"> Habilidades Técnicas </h2>
                <div class="skills">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                </div>
                <div class="skills-2">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
