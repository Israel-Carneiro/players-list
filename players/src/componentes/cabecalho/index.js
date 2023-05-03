import Botao from '../Botao'
import './Cabecalho.css'

const Cabecalho = () => {

    return (<header className="cabecalho">
        <ul>
            <li>
                <Botao>
                    <img src="./imagens/logos/street-hockey-brasil.png" alt="logo street hockey brasil" />
                </Botao>
            </li>
            <li>
                <Botao>
                    <img src="./imagens/logos/etapa-outono.png" alt="logo etapa outono" />
                </Botao>
            </li>
            <li>
                <Botao>
                    <img src="./imagens/logos/etapa-inverno.png" alt="logo etapa inverno" />
                </Botao>
            </li>
            <li>
                <Botao>
                    <img src="./imagens/logos/etapa-primavera.png" alt="logo etapa primavera" />
                </Botao>
            </li>
            <li>
                <Botao>
                    <img src="./imagens/logos/etapa-verao.png" alt="logo etapa verao" />
                </Botao>
            </li>
        </ul>
    </header>)
}

export default Cabecalho