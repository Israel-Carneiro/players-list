import './Card.css'

const Card = (props) => {
    const corBg = { backgroundColor: props.jogador.bgCard[props.temporada] }
    
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
                    <p>{props.jogador.rank[props.temporada]}</p>
                </li>
                <li>
                    <p>Pontos</p>
                    <p>{props.jogador.pontos[props.temporada]}</p>
                </li>
                <li>
                    <p>Gols</p>
                    <p>{props.jogador.gols[props.temporada]}</p>
                </li>
                <li>
                    <p>Jogos</p>
                    <p>{props.jogador.jogos[props.temporada]}</p>
                </li>
                <li>
                    <p>Rodadas</p>
                    <p>{props.jogador.rodadas[props.temporada]}</p>
                </li>
            </ul>
        </div>
    )
}

export default Card