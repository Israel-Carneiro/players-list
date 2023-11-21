import { useState } from 'react'
import Botao from '../Botao'
import './Cabecalho.css'

const Cabecalho = () => {

    const [indice, setIndice] = useState('0')

    const trocaTemporada = (evento) => {
        setIndice(evento.terget.value)
        console.log(indice)
    }

    return (<header className="cabecalho">
        <ul>
            <li>
                <Botao key='circuito' temporada={indice} circuito={0}>
                    <img src="./imagens/logos/street-hockey-brasil.png" alt="logo street hockey brasil" />
                </Botao>
            </li>
            <li>
                <Botao key='outono' temporada={indice} circuito={1}>
                    <img src="./imagens/logos/etapa-outono.png" alt="logo etapa outono" />
                </Botao>
            </li>
            <li>
                <Botao key='inverno' temporada={indice} circuito={2}>
                    <img src="./imagens/logos/etapa-inverno.png" alt="logo etapa inverno" />
                </Botao>
            </li>
            <li>
                <Botao key='primavera' temporada={indice} circuito={3}>
                    <img src="./imagens/logos/etapa-primavera.png" alt="logo etapa primavera" />
                </Botao>
            </li>
            <li>
                <Botao key='verao' temporada={indice} circuito={4}>
                    <img src="./imagens/logos/etapa-verao.png" alt="logo etapa verao" />
                </Botao>
            </li>
        </ul>
    </header>)
}

export default Cabecalho