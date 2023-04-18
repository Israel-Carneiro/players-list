import './Card.css'

const Card = (props) => {

    const indice = props.temporada
    const corBg = { backgroundColor: props.jogador.bgCard[indice] }
    
    return (
        <div className="card" style={corBg}>
            <div className="card__top">
                <img src={props.jogador.imagem} alt={props.jogador.nome} />
            </div>
            <ul className="card__botton">
                <li>
                    <h2>{props.jogador.nome}</h2>
                </li>
                <li>
                    <p>Rank</p>
                    <p>{props.jogador.rank[indice]}</p>
                </li>
                <li>
                    <p>Pontos</p>
                    <p>{props.jogador.pontos[indice]}</p>
                </li>
                <li>
                    <p>Gols</p>
                    <p>{props.jogador.gols[indice]}</p>
                </li>
                <li>
                    <p>Jogos</p>
                    <p>{props.jogador.jogos[indice]}</p>
                </li>
                <li>
                    <p>Rodadas</p>
                    <p>{props.jogador.rodadas[indice]}</p>
                </li>
            </ul>
        </div>
    )
}

export default Card