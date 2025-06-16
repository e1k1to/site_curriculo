import '../assets/cssFiles/global.css'
import { GlobalHeader } from '../Pages/Header.tsx'

export function Projetos() {
    return (
        <html>
        <GlobalHeader/>
            <div className='container'>
            <h1>Meus Projetos Pessoais:</h1>
            <a href="#"> Lastfm api </a>
            </div>
        </html>
    )
}
