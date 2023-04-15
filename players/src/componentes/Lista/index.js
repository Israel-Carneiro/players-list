import Card from "../Card"

const Lista = (props) => {
    return (<section className="lista">
        <Card key={jogadores.nome} jogador={jogadores[0]} temporada={0} />
        <Card key={jogadores.nome} jogador={jogadores[1]} temporada={1} />
        <Card key={jogadores.nome} jogador={jogadores[2]} temporada={2} />
        <Card key={jogadores.nome} jogador={jogadores[3]} temporada={3} />
        <Card key={jogadores.nome} jogador={jogadores[4]} temporada={4} />
    </section>)
}

export default Lista