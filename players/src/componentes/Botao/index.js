import './Botao.css'

const Botao = (props) => {

    return (
        <button className="btn" onClick={props.trocaTemporada}>
        {props.children}</button>
    )
}

export default Botao