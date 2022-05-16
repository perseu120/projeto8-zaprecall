import './style.css'
import logoPequena from "../../assets/imagem/logo-pequeno.png";

export default function Header() {
    return (

        <div className="header">

            <img className='imagemHeader' src={logoPequena} alt="" />
            <h2 className="titulo">
                ZapRecall
            </h2>

        </div>
    )
}