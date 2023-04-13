import './App.css';
import Cabecalho from './componentes/Cabecalho';

function App() {

  const jogadores = [
    {
      nome: 'mago',
      rank: ['#3', '#1', 'inverno', 'primavera', '#4'],
      bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
      pontos: ['195', 'outono', 'inverno', 'primavera', 'verao'],
      gols: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      jogos: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      rodadas: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
    },
    {
      nome: 'tavares',
      rank: ['#4', 'outono', '#1', 'primavera', '#6'],
      bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
      pontos: ['190', 'outono', 'inverno', 'primavera', 'verao'],
      gols: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      jogos: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      rodadas: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
    },
    {
      nome: 'blok',
      rank: ['#1', 'outono', 'inverno', '#1', '#2'],
      bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
      pontos: ['243', 'outono', 'inverno', 'primavera', 'verao'],
      gols: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      jogos: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      rodadas: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
    },
    {
      nome: 'gui',
      rank: ['#2', 'outono', 'inverno', 'primavera', '#1'],
      bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
      pontos: ['241', 'outono', 'inverno', 'primavera', 'verao'],
      gols: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      jogos: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      rodadas: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
    },
    {
      nome: 'rael',
      rank: ['#5', '#5', '#5', '#5', '#10'],
      bgCard: ['#2B2F31', '#F18537', '#008DD4', '#08A85B', '#FFF112'],
      pontos: ['128', 'outono', 'inverno', 'primavera', 'verao'],
      gols: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      jogos: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
      rodadas: ['circuito', 'outono', 'inverno', 'primavera', 'verao'],
    },
  ]

  return (
    <Cabecalho />
  );
}

export default App;
