import Card from "../Card"

const Lista = (props) => {

    const jogadores = [
      {
        nome: 'mago',
        imagem: './imagens/fotos/mago.jpg',
        rank: ['#3', '#1', '#4', '#3', '#4'],
        bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
        pontos: ['195', '52', '51', '51', '41'],
        gols: ['816', '204', '204', '204', '204'],
        jogos: ['416', '104', '104', '104', '104'],
        rodadas: ['216', '54', '54', '54', '54'],
      },
      {
        nome: 'tavares',
        imagem: './imagens/fotos/tavares.jpg',
        rank: ['#4', '#2', '#1', '#4', '#6'],
        bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
        pontos: ['190', '52', '53', '52', '33'],
        gols: ['812', '203', '203', '203', '203'],
        jogos: ['412', '103', '103', '103', '103'],
        rodadas: ['212', '53', '53', '53', '53'],
      },
      {
        nome: 'blok',
        imagem: './imagens/fotos/blok.jpeg',
        rank: ['#1', '#3', '#2', '#1', '#2'],
        bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
        pontos: ['243', '58', '58', '59', '68'],
        gols: ['808', '202', '202', '202', '202'],
        jogos: ['408', '102', '102', '102', '102'],
        rodadas: ['208', '52', '52', '52', '52'],
      },
      {
        nome: 'gui',
        imagem: './imagens/fotos/gui.jpg',
        rank: ['#2', '#4', '#3', '#2', '#1'],
        bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
        pontos: ['241', 'outono', 'inverno', 'primavera', '73'],
        gols: ['804', '201', '201', '201', '201'],
        jogos: ['404', '101', '101', '101', '101'],
        rodadas: ['204', '51', '51', '51', '51'],
      },
      {
        nome: 'rael',
        imagem: './imagens/fotos/rael.jpg',
        rank: ['#5', '#5', '#5', '#5', '#10'],
        bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
        pontos: ['128', '40', '40', '40', '8'],
        gols: ['800', '200', '200', '200', '200'],
        jogos: ['400', '100', '100', '100', '100'],
        rodadas: ['200', '50', '50', '50', '50'],
      },
    ]
    
    return (<section className="lista">
        <Card key={jogadores.nome} jogador={jogadores[0]} temporada={0} />
        <Card key={jogadores.nome} jogador={jogadores[1]} temporada={1} />
        <Card key={jogadores.nome} jogador={jogadores[2]} temporada={2} />
        <Card key={jogadores.nome} jogador={jogadores[3]} temporada={3} />
        <Card key={jogadores.nome} jogador={jogadores[4]} temporada={4} />
    </section>)
}

export default Lista