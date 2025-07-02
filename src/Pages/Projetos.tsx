import { useEffect, useState } from 'react';
import '../assets/cssFiles/global.css'
import '../assets/cssFiles/projetos.css'
import { GlobalHeader } from '../Pages/Header.tsx'

interface Repositorio {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
}

export function Projetos() {

    const [repos, setRepos] = useState<Repositorio[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] = useState<boolean>(false);

    useEffect( () => {
        fetch('https://api.github.com/users/e1k1to/repos?per_page=100')
        .then(res => {
            if (res.status != 200) {
                    setErro(true)
                }
            return res.json();
        })
        .then(resJson => {
            setRepos(resJson);
            setCarregando(false);
        })

        
    },[])
    //<Repositorio[]>
    
    console.log(typeof(repos));

    if(erro) {
        return (
            <>
            <GlobalHeader/>
            <div className='container'>
            <h1> Erro ao localizar os projetos, tente novamente mais tarde...</h1>
            </div>
            </>
        )
    }

    else {
        const reposFavoritos = ["site_curriculo","dio-trilha-java-basico","infestacao","frapybird","bratwz","bolabill","cachorrocore"];
        const reposEscolhidos: Repositorio[] = repos.filter(repo => reposFavoritos.includes(repo.name));
        reposEscolhidos.sort((a,b) => {
            return reposFavoritos.indexOf(a.name) - reposFavoritos.indexOf(b.name);
        })

        const reposExtras: Repositorio[] = repos.filter(repo => !reposFavoritos.includes(repo.name));
        return (
            <>
            <GlobalHeader/>
            <div className='container'>
                <h1>Projetos: </h1>
                {carregando &&  (
                    <h1>Carregando repositorios...</h1>
                )}
                <ul>
                { reposEscolhidos.map( repositorio => (
                    <li key={repositorio.id}>
                        <p>Nome do projeto: { repositorio.name } </p>
                        <p>Descricao do projeto: { repositorio.description ?? "Sem descricao" }  </p>
                        <p>Linguagem do projeto: { repositorio.language ?? "Indefinida"} </p>
                        <a href={repositorio.html_url}> Ver no GitHub</a>
                    </li>
                ))}
                { reposExtras.map( repositorio => (
                    <li key={repositorio.id}>
                        <p>Nome do projeto: { repositorio.name } </p>
                        <p>Descricao do projeto: { repositorio.description ?? "Sem descricao" }  </p>
                        <p>Linguagem do projeto: { repositorio.language ?? "Indefinida"} </p>
                        <a href={repositorio.html_url}> Ver no GitHub</a>
                    </li>
                ))}
                </ul>
            </div>
            </>
        )
        }
}
