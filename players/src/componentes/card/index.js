import './Card.css'

const Card = (props) => {

    const indice = props.temporada
    
    return (
        <div className="card" style={corBg}>
            <div className="card__top">
                <img src={props.jogador.imagem} alt={props.jogador.nome} />
            </div>
            <ul className="card__botton">
                <li>
                    <h2>{props.jogador.nome}</h2>
                </li>
                <div>
                    <p>Rank</p>
                    <p>{props.jogador.rank[indice]}</p>
                </div>
                <div>
                    <p>Pontos</p>
                    <p>{props.jogador.pontos[indice]}</p>
                </div>
                <div>
                    <p>Gols</p>
                    <p>{props.jogador.gols[indice]}</p>
                </div>
                <div>
                    <p>Jogos</p>
                    <p>{props.jogador.jogos[indice]}</p>
                </div>
                <div>
                    <p>Rodadas</p>
                    <p>{props.jogador.rodadas[indice]}</p>
                </div>
            </ul>
        </div>
    )
}

export default Card