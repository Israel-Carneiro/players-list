import './Card.css'

const Card = (props) => {

    const indice = props.temporada
    
    return (
        <div>
            <div>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <ul>
                <li>
                    <h2>{props.nome}</h2>
                </li>
                <div>
                    <p>Rank</p>
                    <p>{props.rank[indice]}</p>
                </div>
                <div>
                    <p>Pontos</p>
                    <p>{props.pontos[indice]}</p>
                </div>
                <div>
                    <p>Gols</p>
                    <p>{props.gols[indice]}</p>
                </div>
                <div>
                    <p>Jogos</p>
                    <p>{props.jogos[indice]}</p>
                </div>
                <div>
                    <p>Rodadas</p>
                    <p>{props.rodadas[indice]}</p>
                </div>
            </ul>
        </div>
    )
}

export default Card